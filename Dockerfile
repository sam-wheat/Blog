#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

RUN npm cache clean --force
RUN npm install -g typescript@~3.8.3
RUN npm install -g @angular/cli

RUN rm -f Blog/ClientApp/package.lock.json

WORKDIR /src
#COPY ["Blog/Blog.csproj", "Blog/"]
#RUN dotnet restore "Blog/Blog.csproj"

#COPY ["Blog.API/Blog.API.csproj", "Blog.API/"]
#RUN dotnet restore "Blog.API/Blog.API.csproj"
COPY . ./

WORKDIR "/src/Blog"
RUN dotnet build "Blog.csproj" -c Release -o /app/Blog/build/
WORKDIR "/src/Blog.API"
RUN dotnet build "Blog.API.csproj" -c Release -o /app/Blog.API/build/

RUN rm -f Blog/ClientApp/package.lock.json

FROM build AS publish
WORKDIR "/src/Blog"
RUN dotnet publish "Blog.csproj" -c Release -o /app/Blog/publish/
WORKDIR "/src/Blog.API"
RUN dotnet publish "Blog.API.csproj" -c Release -o /app/Blog.API/publish/


#-----------------
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY --from=publish /app/Blog/publish ./Blog/
COPY --from=publish /app/Blog.API/publish ./Blog/api/
WORKDIR /app/Blog
ENTRYPOINT ["dotnet", "Blog.dll"]
