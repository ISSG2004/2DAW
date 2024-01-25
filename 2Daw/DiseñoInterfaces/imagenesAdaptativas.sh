#!/bin/bash

# Carpeta de entrada y salida
input_folder="/home/usuario/ImageMagick/Entrada/"
output_folder="/home/usuario/ImageMagick/Salida/"

# Verificar si la carpeta de salida existe, si no, crearla
if [ ! -d "$output_folder" ]; then
    mkdir -p "$output_folder"
fi

# Buscar todas las imágenes en la carpeta de entrada
image_files=$(find "$input_folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \))

# Recorrer cada imagen y convertirla a AVIF, WebP y JPG con diferentes tamaños
for image_file in $image_files; do
    # Obtener el nombre del archivo sin extensión y la extensión
    filename=$(basename -- "$image_file")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"
	width=$(identify -format '%w' "$image_file")
	height=$(identify -format '%h' "$image_file")
	XL=$((width+(width*25/100)))
	L=$((width*1))
	M=$((width*75/100))
	S=$((width*50/100))

    # Construir las rutas de salida con diferentes tamaños para AVIF, WebP y JPG
    output_file_avif_XL="$output_folder/$filename_no_ext-XL.avif"
    output_file_avif_L="$output_folder/$filename_no_ext-L.avif"
    output_file_avif_M="$output_folder/$filename_no_ext-M.avif"
	output_file_avif_S="$output_folder/$filename_no_ext-S.avif"

    output_file_webp_XL="$output_folder/$filename_no_ext-XL.webp"
    output_file_webp_L="$output_folder/$filename_no_ext-L.webp"
    output_file_webp_M="$output_folder/$filename_no_ext-M.webp"
	output_file_webp_S="$output_folder/$filename_no_ext-S.webp"

    output_file_jpg_XL="$output_folder/$filename_no_ext-XL.jpg"
    output_file_jpg_L="$output_folder/$filename_no_ext-L.jpg"
    output_file_jpg_M="$output_folder/$filename_no_ext-M.jpg"
	output_file_jpg_S="$output_folder/$filename_no_ext-S.jpg"

    # Convertir la imagen a AVIF con diferentes tamaños
    convert "$image_file" -resize 125% "$output_file_avif_XL"
    convert "$image_file" "$output_file_avif_L"
    convert "$image_file" -resize 75% "$output_file_avif_M"
	convert "$image_file" -resize 50% "$output_file_avif_S"

    # Convertir la imagen a WebP con diferentes tamaños
    cwebp -quiet -resize $XL 0 "$image_file" -o "$output_file_webp_XL"
    cwebp -quiet "$image_file" -o "$output_file_webp_L"
    cwebp -quiet -resize $M 0 "$image_file" -o "$output_file_webp_M"
	cwebp -quiet -resize $S 0 "$image_file" -o "$output_file_webp_S"

    # Convertir la imagen a JPG
    convert "$image_file" -resize 125% "$output_file_jpg_XL"
    convert "$image_file" -resize 100% "$output_file_jpg_L"
    convert "$image_file" -resize 75% "$output_file_jpg_M"
	convert "$image_file" -resize 50% "$output_file_jpg_S"

    echo "Convertido: $image_file"
done

echo "Proceso completado."