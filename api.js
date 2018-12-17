$( document ).ready(function() {
///Exemplo de requisição
jQuery.getJSON(
    "https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=art&period=week&periodVal=201134&scope=all&limit=3",
    function (data) {
        // Nome do artista
        $("#title1").text(data.art.week.all[0].name);
        $("#title2").text(data.art.week.all[1].name);
        $("#title3").text(data.art.week.all[2].name);

        $('#img1').attr('src', data.art.week.all[0].pic_medium);
        $('#img2').attr('src', data.art.week.all[1].pic_medium);
        $('#img3').attr('src', data.art.week.all[2].pic_medium);

    }
);

});