#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

RUN npm cache clean --force
RUN npm install -g typescript@~3.8.3
RUN npm install -g @angular/cli

WORKDIR /src
#COPY ["Blog/Blog.csproj", "Blog/"]
#RUN dotnet restore "Blog/Blog.csproj"

#COPY ["Blog.API/Blog.API.csproj", "Blog.API/"]
#RUN dotnet restore "Blog.API/Blog.API.csproj"
COPY . .
RUN rm -f Blog/ClientApp/package.lock.json

WORKDIR "/src/Blog"
RUN dotnet build "Blog.csproj" -c Release -o /app/Blog/build
WORKDIR "/src/Blog.API"
RUN dotnet build "Blog.API.csproj" -c Release -o /app/Blog.API/build

FROM build AS publish
WORKDIR "/src/Blog"
RUN dotnet publish "Blog.csproj" -c Release -o /app/Blog/publish
WORKDIR "/src/Blog.API"
RUN dotnet publish "Blog.API.csproj" -c Release -o /app/Blog.API/publish

#-----------------
FROM base AS final
WORKDIR /app/Blog.API
COPY --from=publish /app/Blog.API/publish .

WORKDIR /app/Blog
COPY --from=publish /app/Blog/publish .

ENTRYPOINT ["dotnet", "Blog.dll"]
