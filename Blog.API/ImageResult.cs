namespace Blog.API;

public class ImageResult : ActionResult
{
    private Image _Image { get; set; }
    private ImageFormat _ImageFormat { get; set; }

    public ImageResult(Image Image, ImageFormat ImageFormat)
    {
        _Image = Image;
        _ImageFormat = ImageFormat;
    }

    public FileStreamResult GetFileStreamResult()
    {

        if (_Image == null)
            throw new ArgumentNullException("Image");

        if (_ImageFormat == null)
            throw new ArgumentNullException("ImageFormat");

        string fmt = "";

        if (_ImageFormat.Equals(ImageFormat.Bmp))
            fmt = "image/bmp";
        else if (_ImageFormat.Equals(ImageFormat.Gif))
            fmt = "image/gif";
        else if (_ImageFormat.Equals(ImageFormat.Icon))
            fmt = "image/vnd.microsoft.icon";
        else if (_ImageFormat.Equals(ImageFormat.Jpeg))
            fmt = "image/jpeg";
        else if (_ImageFormat.Equals(ImageFormat.Png))
            fmt = "image/png";
        else if (_ImageFormat.Equals(ImageFormat.Tiff))
            fmt = "image/tiff";
        else if (_ImageFormat.Equals(ImageFormat.Wmf))
            fmt = "image/wmf";

        MemoryStream stream = new MemoryStream();
        _Image.Save(stream, _ImageFormat);
        stream.Position = 0;
        return new FileStreamResult(stream, fmt);
    }
}