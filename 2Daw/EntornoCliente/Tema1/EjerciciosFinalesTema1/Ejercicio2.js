function cambiarImagen() {
    var imagen=document.getElementById("imagen");

    if (imagen.src.match("https://i.eurosport.com/2021/04/16/3115304-63861808-2560-1440.jpg")) {//img1
        imagen.src="https://www.planetarealmadrid.com/uploads/s1/13/57/36/0/bellingham-12.jpeg";//img2
    }else if (imagen.src.match("https://www.planetarealmadrid.com/uploads/s1/13/57/36/0/bellingham-12.jpeg")) {
        imagen.src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt11439631d032d21c/632238e5e20c843841286fee/Jude_Bellingham_Manchester_City_Borussia_Dortmund_2022.jpg"; //img3
        } else if(imagen.src.match("https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt11439631d032d21c/632238e5e20c843841286fee/Jude_Bellingham_Manchester_City_Borussia_Dortmund_2022.jpg")){
            imagen.src="https://www.chafarderias.com/uploads/s1/14/95/93/8/jude-bellingham-presentado-con-el-madrid.jpeg";//img4
    }else if(imagen.src.match("https://www.chafarderias.com/uploads/s1/14/95/93/8/jude-bellingham-presentado-con-el-madrid.jpeg")){
        imagen.src="https://i.eurosport.com/2021/04/16/3115304-63861808-2560-1440.jpg";
    }
}