 
  
/////////////////////////////////////////////////////////////////////////////////
var camping=[
  {
  name:"Beni Mtir - Jendouba",
  Source:"img/works/large/1.jpg",
  info:"Si vous décidez de faire du camping à Bouhertma, vous pouvez vous rendre au centre de camping Bouhertma Outdoor » ou vous pouvez tout simplement installer vos tentes dans la forêt. Le matin, vous pouvez aussi faire du kayak au barrage de Sidi Bou Hertma"
  },
  {
  name:"Ain Soltane - Jendouba",
  Source:"img/works/large/2.jpg",
  info:"Toujours dans la région de Jendouba, Aïn Soltan compte déjà 2 centres de camping. Éloignez-vous du stress de la ville et campez dans cette magnifique zone."
  },
  {
  name:"Oued Zen – Ain Drahem",
  Source:"img/works/large/6.jpg" ,
  info:"Le parc national de Oued Zen est situé à Aïn Drahem. Il fait partie de la Kroumirie et il s’étend sur une superficie de 6700 hectares. Isolé du bruit et de la pollution de a ville, Oued Zen est un endroit parfait pour camper."
  },
  {
  name:"Crique de Robinson – Nabeul",
  Source:"img/works/large/4.jpg",
  info:"À seulement 1h30 de la capitale, la crique de Robinson se trouve dans un coin isolé à Korbous, elle est connue pour sa montagne verdoyante et sa plage calme.La crique est accessible à pied à partir de Ain Atrous ou en petite barque."
  },
  {
  name:"caphmem - bizert",
  Source:"img/works/large/3.jpg" ,
  info:"Cap Hmem, c’est à 25 km au nord de Bizerte centre, un endroit paradisiaque vierge avec  de merveilleuses falaises. Si vous désirez vous baigner sur une plage déserte, débarquer en bateau sur un îlot sauvage,ou plonger à la recherche de grottes sous-marines, Cap Hmem à Bizerte serait une agréable destination."
  },
  {
  name:"douze",
  Source:"img/works/large/5.jpg",
  info:"La ville de Douz est une petite ville dans le centre-sud de la Tunisie. Considérée comme ‘la Porte du Sahara’.Rattachée administrativement au gouvernorat de Kébili, elle est située à 488 kilomètres de Tunis. Elle constitue une municipalité de 30 245 habitants (en 2014). Ses habitants sont essentiellement des’ Mrazig’ qui seraient, selon la tradition, des immigrants arabes de la tribu de Banu Sulaym arrivés en Tunisie au xiiie siècle."
  }
  ]


  /*$(document).ready(function() {
    each(camping, function(e,i) {
        var name = e.name;
        var imgSrc = e.Source;
        $(".preloader").empty()
        $(".preloader").append("<div class='item'><p>" + name + "</p><img src='" + imgSrc + "' /></div>");
    });
});*/
var each = function (coll,func){
  if (Array.isArray(coll)){
      for (var i =0;i<coll.length;i++){
      func(coll[i],i)
  }
  }
  else {
      for (var key in coll){
          func(coll[key],key)
      }
  }
}

var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
  if (predicate(e,i)){
      acc.push(e)
  }
})
return acc;
}



  $("#btn").on("click",function(e){
    e.preventDefault()
    console.log("hii");
    var term=$(".find").val()
    var filt= filter(camping,function(e,i){
       return e.name.toLowerCase().includes(term.toLowerCase())
    })
    console.log(filt);
    $("#container1").empty()
  each(filt,function(e,i){
  $("#container1").append(`<div style="width:1500; margin:0"><h1>'${e.name}'</h1>
  <img  src="${e.Source}"/> 
  <p>'${e.info}'</p> </div>`)
})
})










