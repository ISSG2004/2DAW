@echo off
setlocal enabledelayedexpansion


REM Carpeta de entrada y salida
set input_folder="C:\Users\1Daw\Documents\2DAW\2Daw\DiseñoInterfaces\PracticaImagenesAdaptativas\Imagenes"
set output_folder="C:\Users\1Daw\Documents\2DAW\2Daw\DiseñoInterfaces\PracticaImagenesAdaptativas\ImagenesConvertidas"


REM Verificar si la carpeta de salida existe, si no, crearla
if not exist "%output_folder%" mkdir "%output_folder%"


REM Buscar todas las imágenes en la carpeta de entrada
set "image_files="
for /r "%input_folder%" %%i in (*.jpg *.jpeg *.png *.gif) do (
    set "image_files=!image_files! "%%i""
)


REM Recorrer cada imagen y convertirla a AVIF, WebP y JPG con diferentes tamaños
for %%i in (!image_files!) do (

    REM Obtener el nombre del archivo sin extensión y la extensión
    set "filename=%%~nxi"
    set "extension=%%~xi"
    set "filename_no_ext=!filename:~0,-4!"


    REM Construir las rutas de salida con diferentes tamaños para AVIF, WebP y JPG
    set "output_file_avif_normal=!output_folder!\!filename_no_ext!-normal.avif"
    set "output_file_avif_75=!output_folder!\!filename_no_ext!-75.avif"
    set "output_file_avif_50=!output_folder!\!filename_no_ext!-50.avif"

    set "output_file_webp_normal=!output_folder!\!filename_no_ext!-normal.webp"
    set "output_file_webp_75=!output_folder!\!filename_no_ext!-75.webp"
    set "output_file_webp_50=!output_folder!\!filename_no_ext!-50.webp"

    set "output_file_jpg_normal=!output_folder!\!filename_no_ext!-normal.jpg"
    set "output_file_jpg_75=!output_folder!\!filename_no_ext!-75.jpg"
    set "output_file_jpg_50=!output_folder!\!filename_no_ext!-50.jpg"


    REM Convertir la imagen a AVIF con diferentes tamaños
    magick convert "%%i" -quality 100 "!output_file_avif_normal!"
    magick convert "%%i" -quality 75 "!output_file_avif_75!"
    magick convert "%%i" -quality 50 "!output_file_avif_50!"


    REM Convertir la imagen a WebP con diferentes tamaños
    cwebp -q 100 "%%i" -o "!output_file_webp_normal!"
    cwebp -q 75 "%%i" -o "!output_file_webp_75!"
    cwebp -q 50 "%%i" -o "!output_file_webp_50!"


    REM Convertir la imagen a JPG con diferentes tamaños
    magick convert "%%i" -quality 100 "!output_file_jpg_normal!"
    magick convert "%%i" -quality 75 "!output_file_jpg_75!"
    magick convert "%%i" -quality 50 "!output_file_jpg_50!"

    echo Convertido: "%%i" -^> "!output_file_avif_normal!", "!output_file_avif_75!", "!output_file_avif_50!", "!output_file_webp_normal!", "!output_file_webp_75!", "!output_file_webp_50!", "!output_file_jpg_normal!", "!output_file_jpg_75!", "!output_file_jpg_50!"
)

echo Proceso completado. 
