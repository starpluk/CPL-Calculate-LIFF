var country,
  weightKG,
  widht,
  lenght,
  height,
  kg,
  dimention,
  oversize,
  dimentionCeil,
  kgRate = "",
  kgtemp,
  rate,
  price = "",
  priceFedex = "",
  priceTNT = "",
  priceUPS = "",
  priceConFedex = "",
  priceCoTNT = "",
  priceConUPS = "",
  ratePriceTotal = "";
var conRate = "";
var conType = "";
var conZone = "";
var valurRate,
  text,
  exim,
  fedexEX = "",
  tntEX = "",
  upsEX = "",
  fedexIM = "",
  tntIM = "",
  upsIM = "";
var priceTotal = "";
var shipping = "";
var KgTotal = "";
var rateKG;
var country_1 = "";
var status_1 = "";
var priceLIFF = "",
  nameLIFF = "",
  telLIFF = "",
  emailLIFF = "",
  typeproductLIFF = "",
  agentLIFF = "",
  shippingLIFF = "",
  countryLIFF = "",
  weightLIFF = "";
var agentShip = "";
var priceTotalFedex = "",
  priceTotalTNT = "",
  priceTotalUPS = "";
var priceTempFedex = "",
  priceTempTNT = "",
  priceTempUPS = "";
var textOversize = "";
var booOversize = "false";
var origin = "Thailand",
  destination = "Thailand";
var dimentionArray = [];
var x = 0,
  y = 0,
  z = 0;
var girth;
var dimWeight = "";

function testArray() {
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;

  dimentionArray[0] = widht;
  dimentionArray[1] = lenght;
  dimentionArray[2] = height;

  dimentionArray.sort((a, b) => b - a);
  dimentionArray = dimentionArray.map(Number);

  x = dimentionArray[0];
  y = dimentionArray[1];
  z = dimentionArray[2];
  girth = (y + z) * 2;

  console.log(dimentionArray);

  console.log(x);
  console.log(y);
  console.log(z);
  console.log(x + girth);
}

function oversizeFedEx(OSweight) {
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;

  dimentionArray[0] = widht;
  dimentionArray[1] = lenght;
  dimentionArray[2] = height;

  dimentionArray.sort((a, b) => b - a);
  dimentionArray = dimentionArray.map(Number);

  x = dimentionArray[0];
  y = dimentionArray[1];
  z = dimentionArray[2];
  girth = (y + z) * 2;

  console.log(dimentionArray);

  console.log(x);
  console.log(y);
  console.log(z);
  console.log(x + girth);

  if (OSweight > 31) {
    if (x < 243) {
      if (x <= 240 && y <= 150 && z <= 120) {
        console.log("loop_1");
        {
          if (x + girth < 330) {
            console.log("loop_2");
            textOversize = "The product is oversize, Please contact us.";
          } else {
            console.log("loop_3");
            textOversize = "Contact sale";
          }
        }
      } 
      else {
        textOversize = "*The product is oversize, Please contact us.";
      }
    }
  } 
  else if (OSweight <= 30) {
      if (x <= 121 && y <= 76) {
        if (x + girth < 330) {
          console.log("loop_2");
          textOversize = "";
        } else {
          console.log("loop_3");
          textOversize = "*The product is oversize, Please contact us.";
        }
      } else {
        textOversize = "Contact sale";
      }
    }
  else {
    textOversize = "";
  }
  
}
function oversizeUPS(OSweight) {
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;

  dimentionArray[0] = widht;
  dimentionArray[1] = lenght;
  dimentionArray[2] = height;

  dimentionArray.sort((a, b) => b - a);
  dimentionArray = dimentionArray.map(Number);

  x = dimentionArray[0];
  y = dimentionArray[1];
  z = dimentionArray[2];
  girth = (y + z) * 2;

  console.log(dimentionArray);

  console.log(x);
  console.log(y);
  console.log(z);
  console.log(x + girth);
  if (OSweight > 32 && OSweight < 70) {
    if (x >= 122 && x <= 274) {
          console.log("loop_1");
        if (y < 76) {
          console.log("loop_2");
          textOversizeUPS = "*The product is oversize, Please contact us.";
        } else {
          console.log("loop_3");
          textOversizeUPS = "Contact sale";
        }
      
    } 
    else {
      textOversizeUPS = "*The product is oversize, Please contact us.";
    }
  } else if (OSweight <= 32) {
    if (x >= 122 && x <= 274) {
      console.log("loop_1");
      if (x + girth < 400) {
      console.log("loop_2");
      textOversizeUPS = "*The product is oversize, Please contact us.";
       } else {
          console.log("loop_3");
          textOversizeUPS = "Contact sale";
        }
    }
    else {
      textOversizeUPS = "";
    } 
  } 
  else {
    textOversizeUPS = "Contact sale";
  }
}

async function FedexconvertRate(conRate, conType, conZone) {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function appendData(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].Type == conType && data[i].Zone == conZone) {
        switch (conRate) {
          case "G500":
            price = JSON.stringify(data[i].G500);
            break;
          case "G1000":
            price = JSON.stringify(data[i].G1000);
            break;
          case "G1500":
            price = JSON.stringify(data[i].G1500);
            break;
          case "G2000":
            price = JSON.stringify(data[i].G2000);
            break;
          case "G2500":
            price = JSON.stringify(data[i].G2500);
            break;
          case "G3000":
            price = JSON.stringify(data[i].G3000);
            break;
          case "G3500":
            price = JSON.stringify(data[i].G3500);
            break;
          case "G4000":
            price = JSON.stringify(data[i].G4000);
            break;
          case "G4500":
            price = JSON.stringify(data[i].G4500);
            break;
          case "G5000":
            price = JSON.stringify(data[i].G5000);
            break;
          case "G5500":
            price = JSON.stringify(data[i].G5500);
            break;
          case "G6000":
            price = JSON.stringify(data[i].G6000);
            break;
          case "G6500":
            price = JSON.stringify(data[i].G6500);
            break;
          case "G7000":
            price = JSON.stringify(data[i].G7000);
            break;
          case "G7500":
            price = JSON.stringify(data[i].G7500);
            break;
          case "G8000":
            price = JSON.stringify(data[i].G8000);
            break;
          case "G8500":
            price = JSON.stringify(data[i].G8500);
            break;
          case "G9000":
            price = JSON.stringify(data[i].G9000);
            break;
          case "G9500":
            price = JSON.stringify(data[i].G9500);
            break;
          case "G10000":
            price = JSON.stringify(data[i].G10000);
            break;
          case "G10500":
            price = JSON.stringify(data[i].G10500);
            break;
          case "G11000":
            price = JSON.stringify(data[i].G11000);
            break;
          case "G11500":
            price = JSON.stringify(data[i].G11500);
            break;
          case "G12000":
            price = JSON.stringify(data[i].G12000);
            break;
          case "G12500":
            price = JSON.stringify(data[i].G12500);
            break;
          case "G13000":
            price = JSON.stringify(data[i].G13000);
            break;
          case "G13500":
            price = JSON.stringify(data[i].G13500);
            break;
          case "G14000":
            price = JSON.stringify(data[i].G14000);
            break;
          case "G14500":
            price = JSON.stringify(data[i].G14500);
            break;
          case "G15000":
            price = JSON.stringify(data[i].G15000);
            break;
          case "G15500":
            price = JSON.stringify(data[i].G15500);
            break;
          case "G16000":
            price = JSON.stringify(data[i].G16000);
            break;
          case "G16500":
            price = JSON.stringify(data[i].G16500);
            break;
          case "G17000":
            price = JSON.stringify(data[i].G17000);
            break;
          case "G17500":
            price = JSON.stringify(data[i].G17500);
            break;
          case "G18000":
            price = JSON.stringify(data[i].G18000);
            break;
          case "G18500":
            price = JSON.stringify(data[i].G18500);
            break;
          case "G19000":
            price = JSON.stringify(data[i].G19000);
            break;
          case "G19500":
            price = JSON.stringify(data[i].G19500);
            break;
          case "G20000":
            price = JSON.stringify(data[i].G20000);
            break;
        }
        sessionStorage.setItem("FedexJSON", price);
      }
    }
  }
}

async function TNTconvertRate(conRate, conType, conZone) {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function appendData(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].Type == conType && data[i].Zone == conZone) {
        switch (conRate) {
          case "G500":
            price = JSON.stringify(data[i].G500);
            break;
          case "G1000":
            price = JSON.stringify(data[i].G1000);
            break;
          case "G1500":
            price = JSON.stringify(data[i].G1500);
            break;
          case "G2000":
            price = JSON.stringify(data[i].G2000);
            break;
          case "G2500":
            price = JSON.stringify(data[i].G2500);
            break;
          case "G3000":
            price = JSON.stringify(data[i].G3000);
            break;
          case "G3500":
            price = JSON.stringify(data[i].G3500);
            break;
          case "G4000":
            price = JSON.stringify(data[i].G4000);
            break;
          case "G4500":
            price = JSON.stringify(data[i].G4500);
            break;
          case "G5000":
            price = JSON.stringify(data[i].G5000);
            break;
          case "G5500":
            price = JSON.stringify(data[i].G5500);
            break;
          case "G6000":
            price = JSON.stringify(data[i].G6000);
            break;
          case "G6500":
            price = JSON.stringify(data[i].G6500);
            break;
          case "G7000":
            price = JSON.stringify(data[i].G7000);
            break;
          case "G7500":
            price = JSON.stringify(data[i].G7500);
            break;
          case "G8000":
            price = JSON.stringify(data[i].G8000);
            break;
          case "G8500":
            price = JSON.stringify(data[i].G8500);
            break;
          case "G9000":
            price = JSON.stringify(data[i].G9000);
            break;
          case "G9500":
            price = JSON.stringify(data[i].G9500);
            break;
          case "G10000":
            price = JSON.stringify(data[i].G10000);
            break;
          case "G10500":
            price = JSON.stringify(data[i].G10500);
            break;
          case "G11000":
            price = JSON.stringify(data[i].G11000);
            break;
          case "G11500":
            price = JSON.stringify(data[i].G11500);
            break;
          case "G12000":
            price = JSON.stringify(data[i].G12000);
            break;
          case "G12500":
            price = JSON.stringify(data[i].G12500);
            break;
          case "G13000":
            price = JSON.stringify(data[i].G13000);
            break;
          case "G13500":
            price = JSON.stringify(data[i].G13500);
            break;
          case "G14000":
            price = JSON.stringify(data[i].G14000);
            break;
          case "G14500":
            price = JSON.stringify(data[i].G14500);
            break;
          case "G15000":
            price = JSON.stringify(data[i].G15000);
            break;
          case "G15500":
            price = JSON.stringify(data[i].G15500);
            break;
          case "G16000":
            price = JSON.stringify(data[i].G16000);
            break;
          case "G16500":
            price = JSON.stringify(data[i].G16500);
            break;
          case "G17000":
            price = JSON.stringify(data[i].G17000);
            break;
          case "G17500":
            price = JSON.stringify(data[i].G17500);
            break;
          case "G18000":
            price = JSON.stringify(data[i].G18000);
            break;
          case "G18500":
            price = JSON.stringify(data[i].G18500);
            break;
          case "G19000":
            price = JSON.stringify(data[i].G19000);
            break;
          case "G19500":
            price = JSON.stringify(data[i].G19500);
            break;
          case "G20000":
            price = JSON.stringify(data[i].G20000);
            break;
        }
        sessionStorage.setItem("TNTJSON",price);
      }
    }
  }
}

async function UPSconvertRate(conRate, conType, conZone) {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function appendData(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].Type == conType && data[i].Zone == conZone) {
        switch (conRate) {
          case "G500":
            price = JSON.stringify(data[i].G500);
            break;
          case "G1000":
            price = JSON.stringify(data[i].G1000);
            break;
          case "G1500":
            price = JSON.stringify(data[i].G1500);
            break;
          case "G2000":
            price = JSON.stringify(data[i].G2000);
            break;
          case "G2500":
            price = JSON.stringify(data[i].G2500);
            break;
          case "G3000":
            price = JSON.stringify(data[i].G3000);
            break;
          case "G3500":
            price = JSON.stringify(data[i].G3500);
            break;
          case "G4000":
            price = JSON.stringify(data[i].G4000);
            break;
          case "G4500":
            price = JSON.stringify(data[i].G4500);
            break;
          case "G5000":
            price = JSON.stringify(data[i].G5000);
            break;
          case "G5500":
            price = JSON.stringify(data[i].G5500);
            break;
          case "G6000":
            price = JSON.stringify(data[i].G6000);
            break;
          case "G6500":
            price = JSON.stringify(data[i].G6500);
            break;
          case "G7000":
            price = JSON.stringify(data[i].G7000);
            break;
          case "G7500":
            price = JSON.stringify(data[i].G7500);
            break;
          case "G8000":
            price = JSON.stringify(data[i].G8000);
            break;
          case "G8500":
            price = JSON.stringify(data[i].G8500);
            break;
          case "G9000":
            price = JSON.stringify(data[i].G9000);
            break;
          case "G9500":
            price = JSON.stringify(data[i].G9500);
            break;
          case "G10000":
            price = JSON.stringify(data[i].G10000);
            break;
          case "G10500":
            price = JSON.stringify(data[i].G10500);
            break;
          case "G11000":
            price = JSON.stringify(data[i].G11000);
            break;
          case "G11500":
            price = JSON.stringify(data[i].G11500);
            break;
          case "G12000":
            price = JSON.stringify(data[i].G12000);
            break;
          case "G12500":
            price = JSON.stringify(data[i].G12500);
            break;
          case "G13000":
            price = JSON.stringify(data[i].G13000);
            break;
          case "G13500":
            price = JSON.stringify(data[i].G13500);
            break;
          case "G14000":
            price = JSON.stringify(data[i].G14000);
            break;
          case "G14500":
            price = JSON.stringify(data[i].G14500);
            break;
          case "G15000":
            price = JSON.stringify(data[i].G15000);
            break;
          case "G15500":
            price = JSON.stringify(data[i].G15500);
            break;
          case "G16000":
            price = JSON.stringify(data[i].G16000);
            break;
          case "G16500":
            price = JSON.stringify(data[i].G16500);
            break;
          case "G17000":
            price = JSON.stringify(data[i].G17000);
            break;
          case "G17500":
            price = JSON.stringify(data[i].G17500);
            break;
          case "G18000":
            price = JSON.stringify(data[i].G18000);
            break;
          case "G18500":
            price = JSON.stringify(data[i].G18500);
            break;
          case "G19000":
            price = JSON.stringify(data[i].G19000);
            break;
          case "G19500":
            price = JSON.stringify(data[i].G19500);
            break;
          case "G20000":
            price = JSON.stringify(data[i].G20000);
            break;
        }
        sessionStorage.setItem("UPSJSON", price);
      }
    }
  }
}

function ratePrice(rateprice) {
  rate = rateprice;

  if (rate <= 20) {
    switch (rate) {
      case 0.5:
        ratePriceTotal = "G500";
        break;
      case 1:
        ratePriceTotal = "G1000";
        break;
      case 1.5:
        ratePriceTotal = "G1500";
        break;
      case 2:
        ratePriceTotal = "G2000";
        break;
      case 2.5:
        ratePriceTotal = "G2500";
        break;
      case 3:
        ratePriceTotal = "G3000";
        break;
      case 3.5:
        ratePriceTotal = "G3500";
        break;
      case 4:
        ratePriceTotal = "G4000";
        break;
      case 4.5:
        ratePriceTotal = "G4500";
        break;
      case 5:
        ratePriceTotal = "G5000";
        break;
      case 5.5:
        ratePriceTotal = "G5500";
        break;
      case 6:
        ratePriceTotal = "G6000";
        break;
      case 6.5:
        ratePriceTotal = "G6500";
        break;
      case 7:
        ratePriceTotal = "G7000";
        break;
      case 7.5:
        ratePriceTotal = "G7500";
        break;
      case 8:
        ratePriceTotal = "G8000";
        break;
      case 8:
        ratePriceTotal = "G8000";
        break;
      case 8.5:
        ratePriceTotal = "G8500";
        break;
      case 9:
        ratePriceTotal = "G9000";
        break;
      case 9.5:
        ratePriceTotal = "G9500";
        break;
      case 10:
        ratePriceTotal = "G10000";
        break;
      case 10.5:
        ratePriceTotal = "G15000";
        break;
      case 11:
        ratePriceTotal = "G11000";
        break;
      case 11.5:
        ratePriceTotal = "G11500";
        break;
      case 12:
        ratePriceTotal = "G12000";
        break;
      case 12.5:
        ratePriceTotal = "G12500";
        break;
      case 13:
        ratePriceTotal = "G13000";
        break;
      case 13.5:
        ratePriceTotal = "G13500";
        break;
      case 14:
        ratePriceTotal = "G14000";
        break;
      case 14.5:
        ratePriceTotal = "G14500";
        break;
      case 15:
        ratePriceTotal = "G15000";
        break;
      case 15.5:
        ratePriceTotal = "G15500";
        break;
      case 16:
        ratePriceTotal = "G16000";
        break;
      case 16.5:
        ratePriceTotal = "G16500";
        break;
      case 17:
        ratePriceTotal = "G17000";
        break;
      case 17.5:
        ratePriceTotal = "G17500";
        break;
      case 18:
        ratePriceTotal = "G18000";
        break;
      case 18.5:
        ratePriceTotal = "G18500";
        break;
      case 19:
        ratePriceTotal = "G19000";
        break;
      case 19.5:
        ratePriceTotal = "G19500";
        break;
      case 20:
        ratePriceTotal = "G20000";
        break;
    }
  }
  return ratePriceTotal;
}

async function myFunction() {
  var status;

  async function getData() {
    country = document.getElementById("country").value;
    weightKG = document.getElementById("weight").value;
    widht = document.getElementById("width").value;
    lenght = document.getElementById("lenght").value;
    height = document.getElementById("height").value;
  }

  await getData();
  country_1 = country;
  kg = weightKG;
  dimention = (widht * lenght * height) / 5000;
  dimentionCeil = Math.ceil(dimention / 0.5) * 0.5;

  if (dimention > kg) {
    rateKG = dimentionCeil;
    KgTotal = rateKG;
    dimWeight = dimentionCeil;
    // KgTotal = dimention;
  } else if (kg > dimention) {
    rateKG = Math.ceil(kg / 0.5) * 0.5;
    KgTotal = rateKG;
    dimWeight = "-";
    // valurRate = KgTotal * 1500;
    // text = valurRate;
    status = "น้ำหนัก Kg.";
  } else {
    text = "";
  }

  if (document.getElementById("export").checked == true) {
    shipping = "Export";
  } else if (document.getElementById("import").checked == true) {
    shipping = "Import";
  }

  oversizeFedEx(rateKG);
  oversizeUPS(rateKG);
  KgTotal = ratePrice(rateKG);

  switch (country) {
    case "Macau":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneA(rateKG);
          await OverexTNTZone3(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneA(rateKG);
          await OverimTNTZone3(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneA(KgTotal);
          await exTNTZone3(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneA(KgTotal);
          await imTNTZone3(KgTotal);
        }
      }
      break;
    case "New Zealand":
      // await  exFedexZoneB(KgTotal);
      // await  exTNTZone5(KgTotal);
      // await  exUPSZone2(KgTotal);
      // await  imFedexZoneB(KgTotal);
      // await  imTNTZone5(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneB(rateKG);
          await OverexTNTZone5(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneB(rateKG);
          await OverimTNTZone5(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneB(KgTotal);
          await exTNTZone5(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneB(KgTotal);
          await imTNTZone5(KgTotal);
        }
      }
      break;
    case "Brunei":
      // fedexEX = exFedexZoneC(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneC(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneC(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneC(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneC(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneC(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Cambodia":
      // fedexEX = exFedexZoneC(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneC(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneC(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneC(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneC(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneC(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Laos":
      // fedexEX = exFedexZoneC(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneC(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneC(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneC(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneC(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneC(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Mongolia":
      // fedexEX = exFedexZoneC(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneC(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneC(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneC(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneC(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneC(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Afghanistan ":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Bahrain ":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Bangladesh":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Bhutan":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Egypt":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Iraq":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Jordan":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Kuwait":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Lebanon":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Maldives":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Nepal":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Oman":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Pakistan":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Qatar":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Saudi Arabia":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Sri Lanka":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "United Arab Emirates":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Yemen":
      // fedexEX = exFedexZoneD(KgTotal);
      // tntEX = exTNTZone9(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneD(KgTotal);
      // tntIM = imTNTZone9(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneD(rateKG);
          await OverexTNTZone9(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneD(rateKG);
          await OverimTNTZone9(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneD(KgTotal);
          await exTNTZone9(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneD(KgTotal);
          await imTNTZone9(KgTotal);
        }
      }
      break;
    case "Canada":
      // fedexEX = exFedexZoneE(KgTotal);
      // tntEX = exTNTZone6(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneE(KgTotal);
      // tntIM = imTNTZone6(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneE(rateKG);
          await OverexTNTZone6(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneE(rateKG);
          await OverimTNTZone6(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneE(KgTotal);
          await exTNTZone6(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneE(KgTotal);
          await imTNTZone6(KgTotal);
        }
      }
      break;
    case "Mexico":
      // fedexEX = exFedexZoneE(KgTotal);
      // tntEX = exTNTZone6(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneE(KgTotal);
      // tntIM = imTNTZone6(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneE(rateKG);
          await OverexTNTZone6(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneE(rateKG);
          await OverimTNTZone6(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneE(KgTotal);
          await exTNTZone6(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneE(KgTotal);
          await imTNTZone6(KgTotal);
        }
      }
      break;
    case "Usa":
      // fedexEX = exFedexZoneE(KgTotal);
      // tntEX = exTNTZone6(KgTotal);
      // upsEX = exUPSZone4(KgTotal);
      // fedexIM = imFedexZoneE(KgTotal);
      // tntIM = imTNTZone6(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneE(rateKG);
          await OverexTNTZone6(rateKG);
          await OverexUPSZone5(rateKG);
        } else {
          await OverimFedexZoneE(rateKG);
          await OverimTNTZone6(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneE(KgTotal);
          await exTNTZone6(KgTotal);
          await exUPSZone5(KgTotal);
        } else {
          await imFedexZoneE(KgTotal);
          await imTNTZone6(KgTotal);
        }
      }
      break;
    case "Belgium":
      // fedexEX = exFedexZoneF(KgTotal);
      // tntEX = exTNTZone7(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneF(KgTotal);
      // tntIM = imTNTZone7(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneF(rateKG);
          await OverexTNTZone7(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneF(rateKG);
          await OverimTNTZone7(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneF(KgTotal);
          await exTNTZone7(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneF(KgTotal);
          await imTNTZone7(KgTotal);
        }
      }
      break;
    case "France":
      // fedexEX = exFedexZoneF(KgTotal);
      // tntEX = exTNTZone7(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneF(KgTotal);
      // tntIM = imTNTZone7(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneF(rateKG);
          await OverexTNTZone7(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneF(rateKG);
          await OverimTNTZone7(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneF(KgTotal);
          await exTNTZone7(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneF(KgTotal);
          await imTNTZone7(KgTotal);
        }
      }
      break;
    case "Germany":
      // fedexEX = exFedexZoneF(KgTotal);
      // tntEX = exTNTZone7(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneF(KgTotal);
      // tntIM = imTNTZone7(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneF(rateKG);
          await OverexTNTZone7(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneF(rateKG);
          await OverimTNTZone7(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneF(KgTotal);
          await exTNTZone7(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneF(KgTotal);
          await imTNTZone7(KgTotal);
        }
      }
      break;
    case "Italy":
      // fedexEX = exFedexZoneF(KgTotal);
      // tntEX = exTNTZone7(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneF(KgTotal);
      // tntIM = imTNTZone7(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneF(rateKG);
          await OverexTNTZone7(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneF(rateKG);
          await OverimTNTZone7(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneF(KgTotal);
          await exTNTZone7(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneF(KgTotal);
          await imTNTZone7(KgTotal);
        }
      }
      break;
    case "Netherlands":
      // fedexEX = exFedexZoneF(KgTotal);
      // tntEX = exTNTZone7(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneF(KgTotal);
      // tntIM = imTNTZone7(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneF(rateKG);
          await OverexTNTZone7(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneF(rateKG);
          await OverimTNTZone7(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneF(KgTotal);
          await exTNTZone7(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneF(KgTotal);
          await imTNTZone7(KgTotal);
        }
      }
      break;
    case "Spain":
      // fedexEX = exFedexZoneF(KgTotal);
      // tntEX = exTNTZone7(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneF(KgTotal);
      // tntIM = imTNTZone7(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneF(rateKG);
          await OverexTNTZone7(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneF(rateKG);
          await OverimTNTZone7(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneF(KgTotal);
          await exTNTZone7(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneF(KgTotal);
          await imTNTZone7(KgTotal);
        }
      }
      break;
    case "United Kingdom":
      // fedexEX = exFedexZoneF(KgTotal);
      // tntEX = exTNTZone7(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneF(KgTotal);
      // tntIM = imTNTZone7(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneF(rateKG);
          await OverexTNTZone7(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneF(rateKG);
          await OverimTNTZone7(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneF(KgTotal);
          await exTNTZone7(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneF(KgTotal);
          await imTNTZone7(KgTotal);
        }
      }
      break;
    case "Albania":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Andorra":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Armenia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Austria":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Azerbaijan":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Belarus":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Bosnia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Bulgaria":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Croatia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Cyprus":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Czech Republic":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Denmark":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Estonia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Faeroe Islands":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Finland":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Georgia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Gibraltar":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Greece":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Greenland":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Hungary":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Iceland":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Ireland":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Israel":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Kazakhstan":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Kyrgyzstan":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Latvia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Liechtenstein":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Lithuania":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Luxembourg":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Macedonia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Malta":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Moldova":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Monaco":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Montenegro":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Norway":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Poland":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Portugal":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Romania":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Russian":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Serbia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Slovakia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Slovenia":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Sweden":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Switzerland":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Turkey":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Ukraine":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Uzbekistan":
      // fedexEX = exFedexZoneG(KgTotal);
      // tntEX = exTNTZone8(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneG(KgTotal);
      // tntIM = imTNTZone8(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneG(rateKG);
          await OverexTNTZone8(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneG(rateKG);
          await OverimTNTZone8(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneG(KgTotal);
          await exTNTZone8(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneG(KgTotal);
          await imTNTZone8(KgTotal);
        }
      }
      break;
    case "Algeria":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "American Samoa":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Angola":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Anguilla":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Antigua&Barbuda":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Argentina":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Aruba":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Bahama":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Barbados":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Belize":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Bermuda":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Bolivia":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Bonaire":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Brazil":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Burkina Faso":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Cameroon":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Cape Verde":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Cayman Islands":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Chad":
      // fedexEX = exFedexZoneH(KgTotal);
      // tntEX = exTNTZone10(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneH(KgTotal);
      // tntIM = imTNTZone10(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Chile":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Colombia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Congo":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Cook Islands":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Costa Rica":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Cote D'ivoire":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Cuba":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Congo":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Djibouti":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Dominica":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "East Timor":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Ecuador":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "El Salvador":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Eritrea":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Fiji":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Gabon":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Gambia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Ghana":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Grenada":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Guadeloupe":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Guam":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Guatemala":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Guinea":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Guyana":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Haiti":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Honduras":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Jamaica":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Kenya":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Lesotho":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Liberia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Madagascar":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Malawi":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Mali":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Marshall Islands":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Martinique":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Mauritania":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Mauritius":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Micronesia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Monserrat":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Morocco":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Mozambique":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Namibia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Nicaragua":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Niger":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Nigeria":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Northern Mariana Islands":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Palau":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Panama":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Papua New Guinea":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Paraguay":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Peru":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Reunion":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Rwanda":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Saint Lucia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Samoa":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Senegal":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Seychelles":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Suriname":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Swaziland":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Tanzania":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Togo":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Tonga":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Tunisia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Uganda":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Uruguay":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Vanuatu":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Venezuela":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Wallis&Futuna":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Zambia":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Zimbabwe":
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneH(rateKG);
          await OverexTNTZone10(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneH(rateKG);
          await OverimTNTZone10(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneH(KgTotal);
          await exTNTZone10(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneH(KgTotal);
          await imTNTZone10(KgTotal);
        }
      }
      break;
    case "Vietnam":
      // fedexEX = exFedexZoneN(KgTotal);
      // tntEX = exTNTZone3(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneN(KgTotal);
      // tntIM = imTNTZone3(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneN(rateKG);
          await OverexTNTZone3(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneN(rateKG);
          await OverimTNTZone3(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneN(KgTotal);
          await exTNTZone3(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneN(KgTotal);
          await imTNTZone3(KgTotal);
        }
      }
      break;
    case "India":
      // fedexEX = exFedexZoneO(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneO(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneO(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneO(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneO(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneO(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Japan":
      // fedexEX = exFedexZoneP(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneP(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneP(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneP(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneP(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneP(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Malaysia":
      // fedexEX = exFedexZoneQ(KgTotal);
      // tntEX = exTNTZone1(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneQ(KgTotal);
      // tntIM = imTNTZone1(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneQ(rateKG);
          await OverexTNTZone1(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneQ(rateKG);
          await OverimTNTZone1(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneQ(KgTotal);
          await exTNTZone1(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneQ(KgTotal);
          await imTNTZone1(KgTotal);
        }
      }
      break;
    case "Philliphines":
      // fedexEX = exFedexZoneS(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneS(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneS(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneS(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneS(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneS(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Indonesia":
      // fedexEX = exFedexZoneT(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneT(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneT(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneT(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneT(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneT(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Australia":
      // fedexEX = exFedexZoneU(KgTotal);
      // tntEX = exTNTZone5(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneU(KgTotal);
      // tntIM = imTNTZone5(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneU(rateKG);
          await OverexTNTZone5(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneU(rateKG);
          await OverimTNTZone5(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneU(KgTotal);
          await exTNTZone5(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneU(KgTotal);
          await imTNTZone5(KgTotal);
        }
      }
      break;
    case "Hongkong":
      // fedexEX = exFedexZoneV(KgTotal);
      // tntEX = exTNTZone2(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneV(KgTotal);
      // tntIM = imTNTZone2(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneV(rateKG);
          await OverexTNTZone2(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneV(rateKG);
          await OverimTNTZone2(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneV(KgTotal);
          await exTNTZone2(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneV(KgTotal);
          await imTNTZone2(KgTotal);
        }
      }
      break;
    case "China":
      // fedexEX = exFedexZoneW(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneW(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneW(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneW(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneW(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneW(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Taiwan":
      // fedexEX = exFedexZoneX(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneX(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneX(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneX(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneX(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneX(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;
    case "Singapore":
      // fedexEX = exFedexZoneY(KgTotal);
      // tntEX = exTNTZone1(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneY(KgTotal);
      // tntIM = imTNTZone1(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneY(rateKG);
          await OverexTNTZone1(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneY(rateKG);
          await OverimTNTZone1(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneY(KgTotal);
          await exTNTZone1(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneY(KgTotal);
          await imTNTZone1(KgTotal);
        }
      }
      break;
    case "South Korea":
      // fedexEX = exFedexZoneZ(KgTotal);
      // tntEX = exTNTZone4(KgTotal);
      // upsEX = exUPSZone2(KgTotal);
      // fedexIM = imFedexZoneZ(KgTotal);
      // tntIM = imTNTZone4(KgTotal);
      // break;
      if (rateKG > 20) {
        if (shipping == "Export") {
          await OverexFedexZoneZ(rateKG);
          await OverexTNTZone4(rateKG);
          await OverexUPSZone2(rateKG);
        } else {
          await OverimFedexZoneZ(rateKG);
          await OverimTNTZone4(rateKG);
        }
      } else {
        if (shipping == "Export") {
          await exFedexZoneZ(KgTotal);
          await exTNTZone4(KgTotal);
          await exUPSZone2(KgTotal);
        } else {
          await imFedexZoneZ(KgTotal);
          await imTNTZone4(KgTotal);
        }
      }
      break;

    default:
      text = 0;
  }
  console.log("Func_2");
  console.log(fedexEX);
  console.log(tntEX);
  console.log(fedexEX);

  //Condition Ex/Im
  if (document.getElementById("export").checked == true) {
    shipping = "Export";
    //  priceTempFedex = sessionStorage.getItem("FedexJSON");
    //  priceTempTNT = sessionStorage.getItem("TNTJSON");
    //  priceTempUPS = sessionStorage.getItem("UPSJSON");
  } else if (document.getElementById("import").checked == true) {
    shipping = "Import";
    //  priceTempFedex = fedexIM;
    //  priceTempTNT = tntIM;
    //  priceTempUPS = upsIM;
  }

  // priceTotalFedex = priceTempFedex;
  // priceTotalTNT = priceTempTNT;
  // priceTotalUPS = priceTempUPS;

  // priceTotalFedex = addCommas(priceTempFedex.toFixed(0));
  // priceTotalTNT = addCommas(priceTempTNT.toFixed(0));
  // priceTotalUPS = addCommas(priceTempUPS.toFixed(0));

  sessionStorage.setItem("weightKG", kg);
  sessionStorage.setItem("resultText", text);
  sessionStorage.setItem("countryResult", country);
  sessionStorage.setItem("shippingResult", shipping);
  sessionStorage.setItem("Status", status);
  sessionStorage.setItem("priceTotalFedex", priceTempFedex);
  sessionStorage.setItem("priceTotalTNT", priceTempTNT);
  sessionStorage.setItem("priceTotalUPS", priceTempUPS);
  sessionStorage.setItem("textOversize", textOversize);
  sessionStorage.setItem("textOversizeUPS", textOversizeUPS);
  sessionStorage.setItem("booOversize", booOversize);
  sessionStorage.setItem("dimWeight", dimWeight);

  if (document.getElementById("export").checked == true) {
    if (
      country == "Australia" ||
      country == "Austria" ||
      country == "Belgium" ||
      country == "Denmark" ||
      country == "Finland" ||
      country == "France" ||
      country == "Germany" ||
      country == "Iceland" ||
      country == "Italy" ||
      country == "Japan" ||
      country == "Netherlands" ||
      country == "New Zealand" ||
      country == "Norway" ||
      country == "Spain" ||
      country == "Sweden" ||
      country == "Switzerland" ||
      country == "United Kingdom" ||
      country == "Usa"
    ) {
      console.log("Success");
      window.location.replace("resultEXportUPS.html");
    } else {
      console.log("Success");
      window.location.replace("resultEXPORT.html");
    }
  } else if (document.getElementById("import").checked == true) {
    window.location.replace("resultIMPORT.html");
  }

  //   sendMsg();
}

function ReplaceIndex() {
  window.location.replace("index.html");
}

function ReplaceForm() {
  if (document.getElementById("rbtnFedex").checked == true) {
    agentShip = "FedEx";
    priceTotal = sessionStorage.getItem("FedexJSON");
    window.location.replace("form.html");
  } else if (document.getElementById("rbtnTnt").checked == true) {
    agentShip = "TNT";
    priceTotal = sessionStorage.getItem("TNTJSON");
    window.location.replace("form.html");
  } else if (document.getElementById("rbtnUps").checked == true) {
    agentShip = "UPS";
    priceTotal = sessionStorage.getItem("UPSJSON");
    window.location.replace("form.html");
    console.log(priceTotal);
  }

  sessionStorage.setItem("priceTotal", priceTotal);
  sessionStorage.setItem("agentShip", agentShip);
  console.log(priceTotal);
}

function ReplaceResult() {
  country_1 = sessionStorage.getItem("countryResult");

  if (
    country_1 == "Australia" ||
    country_1 == "Austria" ||
    country_1 == "Belgium" ||
    country_1 == "Denmark" ||
    country_1 == "Finland" ||
    country_1 == "France" ||
    country_1 == "Germany" ||
    country_1 == "Iceland" ||
    country_1 == "Italy" ||
    country_1 == "Japan" ||
    country_1 == "Netherlands" ||
    country_1 == "New Zealand" ||
    country_1 == "Norway" ||
    country_1 == "Spain" ||
    country_1 == "Sweden" ||
    country_1 == "Switzerland" ||
    country_1 == "United Kingdom" ||
    country_1 == "Usa"
  ) {
    window.location.replace("resultEXportUPS.html");
  } else {
    window.location.replace("resultEXPORT.html");
  }
}

function addCommas(nStr) {
  nStr += "";
  x = nStr.split(".");
  x1 = x[0];
  x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

function submitForm() {
  nameLIFF = document.getElementById("input__field_1").value;
  telLIFF = document.getElementById("input__field_2").value;
  emailLIFF = document.getElementById("input__field_3").value;
  typeproductLIFF = document.getElementById("input__field_4").value;

  sessionStorage.setItem("nameLIFF", nameLIFF);
  sessionStorage.setItem("telLIFF", telLIFF);
  sessionStorage.setItem("emailLIFF", emailLIFF);
  sessionStorage.setItem("typeproductLIFF", typeproductLIFF);
  sessionStorage.setItem("priceTotalFedex", priceTotalFedex);
  sessionStorage.setItem("priceLIFF", priceLIFF);

  window.location.replace("confirm.html");
}

///////////////////////////////////
///////// LIFF Function ///////////
///////////////////////////////////
function createUniversalLink() {
  const link1 = liff.permanentLink.createUrl();
  document.getElementById("universalLink1").append(link1);

  liff.permanentLink.setExtraQueryParam("param=9");
  const link2 = liff.permanentLink.createUrl();
  document.getElementById("universalLink2").append(link2);
}

async function shareMsg() {
  await liff.shareTargetPicker([
    {
      type: "text",
      text: "This message was sent by ShareTargetPicker",
    },
  ]);
}

function logOut() {
  liff.logout();
  window.location.reload();
}

function closed() {
  liff.closeWindow();
}

async function scanCode() {
  const result = await liff.scanCode();
  document.getElementById("scanCode").append(result.value);
}

function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true,
  });
}

async function getFriendship() {
  const friend = await liff.getFriendship();
  document.getElementById("friendship").append(friend.friendFlag);
  if (!friend.friendFlag) {
    if (confirm("คุณยังไม่ได้เพิ่ม Bot เป็นเพื่อน จะเพิ่มเลยไหม?")) {
      window.location = "https://line.me/R/ti/p/@YOUR-BOT-ID";
    }
  }
}

function getContext() {
  if (liff.getContext() != null) {
    document.getElementById("type").append(liff.getContext().type);
    document.getElementById("viewType").append(liff.getContext().viewType);
    document.getElementById("utouId").append(liff.getContext().utouId);
    document.getElementById("roomId").append(liff.getContext().roomId);
    document.getElementById("groupId").append(liff.getContext().groupId);
  }
}

async function getUserProfile() {
  const profile = await liff.getProfile();
  document.getElementById("pictureUrl").src = profile.pictureUrl;
  document.getElementById("userId").append(profile.userId);
  document.getElementById("statusMessage").append(profile.statusMessage);
  document.getElementById("displayName").append(profile.displayName);
  document
    .getElementById("decodedIDToken")
    .append(liff.getDecodedIDToken().email);
}

function getEnvironment() {
  document.getElementById("os").append(liff.getOS());
  document.getElementById("language").append(liff.getLanguage());
  document.getElementById("version").append(liff.getVersion());
  document.getElementById("accessToken").append(liff.getAccessToken());
  document.getElementById("isInClient").append(liff.isInClient());
  // if (liff.isInClient()) {
  //   document.getElementById("btnLogOut").style.display = "none"
  // } else {
  //   document.getElementById("btnMsg").style.display = "none"
  //   document.getElementById("btnScanCode").style.display = "none"
  //   document.getElementById("btnClose").style.display = "none"
  // }
}

/////////////////////////////////
//////// SEND MESSAGE ///////////
/////////////////////////////////

async function sendMsg() {
  shippingLIFF = sessionStorage.getItem("shippingResult");
  agentLIFF = sessionStorage.getItem("agentShip");
  countryLIFF = sessionStorage.getItem("countryResult");
  weightLIFF = sessionStorage.getItem("weightKG");
  priceLIFF = sessionStorage.getItem("priceTotal", priceTotal);
  nameLIFF = document.getElementById("input__field_1").value;
  telLIFF = document.getElementById("input__field_2").value;
  emailLIFF = document.getElementById("input__field_3").value;
  typeproductLIFF = document.getElementById("input__field_4").value;
  booOversize = sessionStorage.getItem("booOversize");

  if (shippingLIFF == "Export") {
    destination = countryLIFF;
  } else {
    origin = countryLIFF;
  }

  if (liff.getContext().type !== "none") {
    await liff.sendMessages([
      {
        type: "text",
        text:
          "Service Type : " +
          shippingLIFF +
          "\nAgent : " +
          agentLIFF +
          "\n\nOrigin Country : " +
          origin +
          "\nDestination Country : " +
          destination +
          "\n\nWeight : " +
          weightLIFF +
          " Kg.\n\nProduct Type : " +
          typeproductLIFF +
          "\n\nEST.Price : " +
          priceLIFF +
          " บาท\n\nContact Name : " +
          nameLIFF +
          "\nPhone Number : " +
          telLIFF +
          "\nE-mail : " +
          emailLIFF +
          "\n\nTerm & Condition :\n\n📌 Rate Include\n- Vat 7%\n- Insurance 2% of Product Value + Freight Charge\n📌 Rate Exclude\n- Local Delivery from Origin\n- Remote Area (If Any)\n- Import Duty & Tax at Destination (If Any)\n- In case of being inspected, the product may be bounced or destroyed, Depending on the consideration of the destination customs department. (If Any)\n\n📌📦The higher weight between Actual Weight [kg] and Dimension Weight [Width (cm) x Length (cm) x Height (cm) / 5,000] will be used to calculate shipping rate. ",
      },
    ]);
    closed();
  }
}

////////////////////////////////////////////
/////////////////// TEST ////////////////////
////////////////////////////////////////////
// async function OverexFedexZoneA(kG) {
//   kg = kG;
//   if (kg > 20 && kg <= 21) {
//     //
//     price = kg * 286;
//   } else if (kg > 21 && kg <= 45) {
//     //
//     price = kg * 286;
//   } else if (kg > 45 && kg <= 71) {
//     //
//     price = kg * 285;
//   } else if (kg > 71 && kg <= 100) {
//     //
//     price = kg * 275;
//   } else if (kg > 100 && kg <= 300) {
//     //
//     price = kg * 259;
//   }
//   else if (kg > 300) {
//     //
//     price = kg * 251;
//   }
//   price = addCommas(price.toFixed(0));
//   sessionStorage.setItem("FedexJSON",price);
// }
// async function OverimFedexZoneA(kG){
//   kg = kG;
//   if (kg > 20 && kg <= 21) {
//     //
//     price = kg * 293;
//   } else if (kg > 21 && kg <= 45) {
//     //
//     price = kg * 292;
//   } else if (kg > 45 && kg <= 71) {
//     //
//     price = kg * 281;
//   } else if (kg > 71 && kg <= 100) {
//     //
//     price = kg * 265;
//   } else if (kg > 100) {
//     //
//     price = kg * 265;
//   }
//   sessionStorage.setItem("FedexJSON",price);
// }
// async function OverimTNTZone3(kG) {
//   kg = kG;
//    if (kg > 20 && kg <= 21) {
//     //
//     price = kg * 424;
//   } else if (kg > 21 && kg <= 45) {
//     //
//     price = kg * 424;
//   } else if (kg > 45 && kg <= 71) {
//     //
//     price = kg * 424;
//   } else if (kg > 71 && kg <= 100) {
//     //
//     price = kg * 423;
//   } else if (kg > 100) {
//     //
//     price = kg * 424;
//   }
//   sessionStorage.setItem("UPSJSON",price);
// }
// async function OverexTNTZone3(kG) {
//   kg = kG;
//    if (kg > 20 && kg <= 21) {
//     //
//     price = kg * 247;
//   } else if (kg > 21 && kg <= 50) {
//     //
//     price = kg * 247;
//   } else if (kg > 50 && kg <= 71) {
//     //
//     price = kg * 233;
//   } else if (kg > 71 && kg <= 100) {
//     //
//     price = kg * 209;
//   } else if (kg > 100 && kg <= 250) {
//     //
//     price = kg * 201;
//   }
//     else if (kg > 250) {
//     //
//     price = kg * 191;
//   }
//   price = addCommas(price.toFixed(0));
//   sessionStorage.setItem("TNTJSON",price);
// }
// async function OverexUPSZone2(kG) {
//   kg = kG;
//   if (kg > 20 && kg <= 21) {
//    //
//    price = kg * 424;
//  } else if (kg > 21 && kg <= 45) {
//    //
//    price = kg * 424;
//  } else if (kg > 45 && kg <= 71) {
//    //
//    price = kg * 424;
//  } else if (kg > 71 && kg <= 100) {
//    //
//    price = kg * 423;
//  } else if (kg > 100) {
//    //
//    price = kg * 424;
//  }
//  sessionStorage.setItem("UPSJSON",price);
// }
// async function exFedexZoneA(kG) {
//   conRate = kG;
//   conType = "Export";
//   conZone = "FEDEX_ZONE_A"
//   await FedexconvertRate(conRate, conType, conZone);
// }
// async function exTNTZone3(kG) {
//   conRate = kG;
//   conType = "Export";
//   conZone = "TNT_ZONE_3";
//   await TNTconvertRate(conRate, conType, conZone);
// }
// async function exUPSZone2(kG) {
//   conRate = kG;
//   conType = "Export";
//   conZone = "UPS_ZONE_2"
//   await UPSconvertRate(conRate, conType, conZone);
// }

// async function imFedexZoneA(kG) {
//   conRate = kG;
//   conType = "Import";
//   conZone = "FEDEX_ZONE_A"
//   await FedexconvertRate(conRate, conType, conZone);
// }
// async function imTNTZone3(kG) {
//   conRate = kG;
//   conType = "Import";
//   conZone = "TNT_ZONE_3"
//   await TNTconvertRate(conRate, conType, conZone);
// }

////////////////////////////////////////////
/////////////////// UPS ////////////////////
////////////////////////////////////////////

async function exUPSZone1(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "UPS_ZONE_1";
  await UPSconvertRate(conRate, conType, conZone);
}
async function exUPSZone2(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "UPS_ZONE_2";
  await UPSconvertRate(conRate, conType, conZone);
}
async function exUPSZone3(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "UPS_ZONE_3";
  await UPSconvertRate(conRate, conType, conZone);
}
async function exUPSZone4(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "UPS_ZONE_4";
  await UPSconvertRate(conRate, conType, conZone);
}
async function exUPSZone5(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "UPS_ZONE_5";
  await UPSconvertRate(conRate, conType, conZone);
}
async function exUPSZone6(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "UPS_ZONE_6";
  await UPSconvertRate(conRate, conType, conZone);
}

////////////////////////////////////////////
/////////////////// TNT ////////////////////
////////////////////////////////////////////

async function imTNTZone1(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_1";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone2(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_2";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone3(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_3";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone4(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_4";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone5(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_5";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone6(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_6";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone7(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_7";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone8(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_8";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone9(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_9";
  await TNTconvertRate(conRate, conType, conZone);
}
async function imTNTZone10(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "TNT_ZONE_10";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone1(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_1";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone2(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_2";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone3(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_3";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone4(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_4";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone5(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_5";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone6(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_6";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone7(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_7";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone8(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_8";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone9(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_9";
  await TNTconvertRate(conRate, conType, conZone);
}
async function exTNTZone10(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "TNT_ZONE_10";
  await TNTconvertRate(conRate, conType, conZone);
}

////////////////////////////////////////////
/////////////////// Fedex //////////////////
////////////////////////////////////////////
async function exFedexZoneA(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_A";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneB(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_B";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneC(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_C";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneD(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_D";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneE(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_E";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneF(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_F";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneG(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_G";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneH(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_H";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneK(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_K";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneN(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_N";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneO(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_O";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneP(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_P";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneQ(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_Q";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneS(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_S";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneT(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_T";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneU(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_U";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneV(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_V";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneW(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_W";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneX(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_X";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneY(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_Y";
  await FedexconvertRate(conRate, conType, conZone);
}
async function exFedexZoneZ(kG) {
  conRate = kG;
  conType = "Export";
  conZone = "FEDEX_ZONE_Z";
  await FedexconvertRate(conRate, conType, conZone);
}
/// IMPORT ///
async function imFedexZoneA(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_A";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneB(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_B";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneC(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_C";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneD(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_D";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneE(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_E";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneF(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_F";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneG(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_G";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneH(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_H";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneK(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_K";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneN(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_N";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneO(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_O";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneP(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_P";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneQ(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_Q";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneS(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_S";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneT(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_T";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneU(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_U";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneV(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_V";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneW(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_W";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneX(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_X";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneY(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_Y";
  await FedexconvertRate(conRate, conType, conZone);
}
async function imFedexZoneZ(kG) {
  conRate = kG;
  conType = "Import";
  conZone = "FEDEX_ZONE_Z";
  await FedexconvertRate(conRate, conType, conZone);
}

////////////////////////////////////////////
/////////////////// Over UPS ////////////////////
////////////////////////////////////////////

async function OverexUPSZone2(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 306;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 306;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 288;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 423;
  } else if (kg > 100) {
    //
    price = kg * 424;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("UPSJSON", price);
}
async function OverexUPSZone5(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 424;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 424;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 428;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 511;
  } else if (kg > 100) {
    //
    price = kg * 511;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("UPSJSON", price);
}
async function OverexUPSZone6(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 445;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 445;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 448;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 468;
  } else if (kg > 100) {
    //
    price = kg * 468;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("UPSJSON", price);
}
async function OverexUPSZone7(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 497;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 497;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 488;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 546;
  } else if (kg > 100) {
    //
    price = kg * 543;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("UPSJSON", price);
}

////////////////////////////////////////////
/////////////////// Over TNT ////////////////////
////////////////////////////////////////////

async function OverimTNTZone1(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 202;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 202;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 182;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 180;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 172;
  } else if (kg > 250) {
    //
    price = kg * 166;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone2(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 242;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 242;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 224;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 218;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 202;
  } else if (kg > 250) {
    //
    price = kg * 192;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone3(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 299;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 299;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 281;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 250;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 240;
  } else if (kg > 250) {
    //
    price = kg * 228;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone4(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 333;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 333;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 323;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 315;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 313;
  } else if (kg > 250) {
    //
    price = kg * 311;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone5(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 370;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 370;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 366;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 349;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 347;
  } else if (kg > 250) {
    //
    price = kg * 339;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone6(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 378;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 378;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 372;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 337;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 335;
  } else if (kg > 250) {
    //
    price = kg * 329;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone7(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 436;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 436;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 418;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 376;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 376;
  } else if (kg > 250) {
    //
    price = kg * 372;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone8(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 475;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 475;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 465;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 414;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 412;
  } else if (kg > 250) {
    //
    price = kg * 408;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone9(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 537;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 537;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 537;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 503;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 503;
  } else if (kg > 250) {
    //
    price = kg * 489;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverimTNTZone10(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 660;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 660;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 632;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 618;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 612;
  } else if (kg > 250) {
    //
    price = kg * 610;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone1(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 172;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 172;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 158;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 154;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 148;
  } else if (kg > 250) {
    //
    price = kg * 142;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone2(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 201;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 201;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 189;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 183;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 172;
  } else if (kg > 250) {
    //
    price = kg * 164;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone3(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 247;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 247;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 233;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 209;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 201;
  } else if (kg > 250) {
    //
    price = kg * 191;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone4(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 274;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 274;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 265;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 257;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 255;
  } else if (kg > 250) {
    //
    price = kg * 253;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone5(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 399;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 399;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 395;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 383;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 381;
  } else if (kg > 250) {
    //
    price = kg * 375;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone6(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 338;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 338;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 334;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 310;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 308;
  } else if (kg > 250) {
    //
    price = kg * 302;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone7(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 395;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 395;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 381;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 350;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 350;
  } else if (kg > 250) {
    //
    price = kg * 346;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone8(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 425;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 425;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 417;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 377;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 377;
  } else if (kg > 250) {
    //
    price = kg * 373;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone9(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 474;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 474;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 474;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 447;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 447;
  } else if (kg > 250) {
    //
    price = kg * 435;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}
async function OverexTNTZone10(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 569;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 569;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 547;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 538;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 530;
  } else if (kg > 250) {
    //
    price = kg * 528;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("TNTJSON", price);
}

////////////////////////////////////////////
/////////////////// Over Fedex //////////////////
////////////////////////////////////////////

async function OverexFedexZoneA(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 286;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 286;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 285;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 275;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 259;
  } else if (kg > 300) {
    //
    price = kg * 251;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneB(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 666;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 666;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 662;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 584;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 583;
  } else if (kg > 300) {
    //
    price = kg * 552;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneC(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 467;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 467;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 459;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 436;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 434;
  } else if (kg > 300) {
    //
    price = kg * 433;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneD(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 687;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 687;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 587;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 493;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 463;
  } else if (kg > 300) {
    //
    price = kg * 462;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneE(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 523;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 523;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 516;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 464;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 456;
  } else if (kg > 300) {
    //
    price = kg * 445;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneF(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 539;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 539;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 510;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 499;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 482;
  } else if (kg > 300) {
    //
    price = kg * 465;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneG(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 622;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 622;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 601;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 601;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 590;
  } else if (kg > 300) {
    //
    price = kg * 577;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneH(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 1109;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 1079;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 873;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 866;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 816;
  } else if (kg > 300) {
    //
    price = kg * 814;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneK(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 230;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 230;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 221;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 211;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 196;
  } else if (kg > 300) {
    //
    price = kg * 182;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneN(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 303;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 303;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 295;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 267;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 262;
  } else if (kg > 300) {
    //
    price = kg * 262;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneO(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 352;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 352;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 351;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 319;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 313;
  } else if (kg > 300) {
    //
    price = kg * 312;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneP(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 334;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 334;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 316;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 283;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 284;
  } else if (kg > 300) {
    //
    price = kg * 277;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneQ(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 237;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 237;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 220;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 201;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 190;
  } else if (kg > 300) {
    //
    price = kg * 184;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneS(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 317;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 317;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 316;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 315;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 303;
  } else if (kg > 300) {
    //
    price = kg * 282;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneT(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 338;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 338;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 336;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 337;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 337;
  } else if (kg > 300) {
    //
    price = kg * 337;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneU(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 676;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 676;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 672;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 593;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 591;
  } else if (kg > 300) {
    //
    price = kg * 560;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneV(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 219;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 219;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 210;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 193;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 183;
  } else if (kg > 300) {
    //
    price = kg * 176;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneW(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 335;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 335;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 307;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 305;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 297;
  } else if (kg > 300) {
    //
    price = kg * 282;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneX(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 284;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 284;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 270;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 261;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 248;
  } else if (kg > 300) {
    //
    price = kg * 240;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneY(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 256;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 256;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 251;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 223;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 222;
  } else if (kg > 300) {
    //
    price = kg * 219;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverexFedexZoneZ(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 320;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 320;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 318;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 307;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 307;
  } else if (kg > 300) {
    //
    price = kg * 302;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneA(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 401;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 401;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 389;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 334;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 296;
  } else if (kg > 300) {
    //
    price = kg * 285;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneB(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 543;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 543;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 540;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 534;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 515;
  } else if (kg > 300) {
    //
    price = kg * 502;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneC(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 815;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 815;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 724;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 690;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 659;
  } else if (kg > 300) {
    //
    price = kg * 658;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneD(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 784;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 784;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 718;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 697;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 656;
  } else if (kg > 300) {
    //
    price = kg * 656;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneE(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 776;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 776;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 652;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 826;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 813;
  } else if (kg > 300) {
    //
    price = kg * 796;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneF(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 575;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 575;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 573;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 572;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 575;
  } else if (kg > 300) {
    //
    price = kg * 572;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneG(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 609;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 609;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 606;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 609;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 608;
  } else if (kg > 300) {
    //
    price = kg * 604;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneH(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 1800;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 1800;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 1527;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 1405;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 1363;
  } else if (kg > 300) {
    //
    price = kg * 1342;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneK(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 301;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 301;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 302;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 259;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 257;
  } else if (kg > 300) {
    //
    price = kg * 252;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneN(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 652;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 652;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 552;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 546;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 503;
  } else if (kg > 300) {
    //
    price = kg * 502;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneO(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 701;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 701;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 642;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 190;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 189;
  } else if (kg > 300) {
    //
    price = kg * 189;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneP(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 409;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 409;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 401;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 396;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 380;
  } else if (kg > 300) {
    //
    price = kg * 343;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneQ(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 271;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 271;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 254;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 224;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 223;
  } else if (kg > 300) {
    //
    price = kg * 220;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneS(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 325;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 325;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 324;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 318;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 301;
  } else if (kg > 300) {
    //
    price = kg * 288;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneT(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 410;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 410;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 405;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 393;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 392;
  } else if (kg > 300) {
    //
    price = kg * 388;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneU(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 585;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 585;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 536;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 517;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 500;
  } else if (kg > 300) {
    //
    price = kg * 499;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneV(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 313;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 313;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 311;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 269;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 269;
  } else if (kg > 300) {
    //
    price = kg * 267;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneW(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 445;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 445;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 429;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 424;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 388;
  } else if (kg > 300) {
    //
    price = kg * 363;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneX(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 306;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 306;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 301;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 293;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 291;
  } else if (kg > 300) {
    //
    price = kg * 290;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneY(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 302;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 302;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 284;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 280;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 280;
  } else if (kg > 300) {
    //
    price = kg * 271;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
async function OverimFedexZoneZ(kG) {
  kg = kG;
  if (kg > 20 && kg <= 21) {
    //
    price = kg * 427;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 427;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 411;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 398;
  } else if (kg > 100 && kg <= 300) {
    //
    price = kg * 397;
  } else if (kg > 300) {
    //
    price = kg * 363;
  }
  price = addCommas(price.toFixed(0));
  sessionStorage.setItem("FedexJSON", price);
}
