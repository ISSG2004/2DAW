# Carpeta de entrada y salida
$inputFolder = "C:\Users\1Daw\Documents\2DAW\2Daw\DiseñoInterfaces\PracticaImagenesAdaptativas\Imagenes"
$outputFolder = "C:\Users\1Daw\Documents\2DAW\2Daw\DiseñoInterfaces\PracticaImagenesAdaptativas\ImagenesConvertidas"

# Verificar si la carpeta de salida existe, si no, crearla
if (-not (Test-Path $outputFolder -PathType Container)) {
    New-Item -ItemType Directory -Path $outputFolder | Out-Null
}

# Buscar todas las imágenes en la carpeta de entrada
$imageFiles = Get-ChildItem $inputFolder -Filter *.jpg,*.jpeg,*.png,*.gif -File

# Recorrer cada imagen y convertirla a AVIF, WebP y JPG con diferentes tamaños
foreach ($imageFile in $imageFiles) {
    # Obtener el nombre del archivo sin extensión y la extensión
    $filename = [System.IO.Path]::GetFileNameWithoutExtension($imageFile.Name)
    $extension = $imageFile.Extension
    $filenameNoExt = $filename

    # Construir las rutas de salida con diferentes tamaños para AVIF, WebP y JPG
    $outputFileAvifNormal = Join-Path $outputFolder "$filenameNoExt-normal.avif"
    $outputFileAvif75 = Join-Path $outputFolder "$filenameNoExt-75.avif"
    $outputFileAvif50 = Join-Path $outputFolder "$filenameNoExt-50.avif"

    $outputFileWebpNormal = Join-Path $outputFolder "$filenameNoExt-normal.webp"
    $outputFileWebp75 = Join-Path $outputFolder "$filenameNoExt-75.webp"
    $outputFileWebp50 = Join-Path $outputFolder "$filenameNoExt-50.webp"

    $outputFileJpgNormal = Join-Path $outputFolder "$filenameNoExt-normal.jpg"
    $outputFileJpg75 = Join-Path $outputFolder "$filenameNoExt-75.jpg"
    $outputFileJpg50 = Join-Path $outputFolder "$filenameNoExt-50.jpg"

    # Convertir la imagen a AVIF con diferentes tamaños
    magick convert $imageFile.FullName -quality 100 $outputFileAvifNormal
    magick convert $imageFile.FullName -quality 75 $outputFileAvif75
    magick convert $imageFile.FullName -quality 50 $outputFileAvif50

    # Convertir la imagen a WebP con diferentes tamaños
    cwebp -q 100 $imageFile.FullName -o $outputFileWebpNormal
    cwebp -q 75 $imageFile.FullName -o $outputFileWebp75
    cwebp -q 50 $imageFile.FullName -o $outputFileWebp50

    # Convertir la imagen a JPG con diferentes tamaños
    magick convert $imageFile.FullName -quality 100 $outputFileJpgNormal
    magick convert $imageFile.FullName -quality 75 $outputFileJpg75
    magick convert $imageFile.FullName -quality 50 $outputFileJpg50

    Write-Output "Convertido: $($imageFile.FullName) -> $($outputFileAvifNormal), $($outputFileAvif75), $($outputFileAvif50), $($outputFileWebpNormal), $($outputFileWebp75), $($outputFileWebp50), $($outputFileJpgNormal), $($outputFileJpg75), $($outputFileJpg50)"
}

Write-Output "Proceso completado."
