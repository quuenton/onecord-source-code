utils.play_sound("C:\\Windows\\Media\\Speech On.wav");
var preset = {elements: [], add: function (jimia, jolisa, kadance, orvind, zanaa, bahram, kaisee) {
  bahram = bahram || 0;
  kaisee = kaisee || 0;
  switch (jimia) {
    case "checkbox":
      {
        ui.add_checkbox("[" + jolisa + "] " + kadance, "iy." + orvind);
        preset.elements.push([jimia, orvind, zanaa]);
        break;
      }
      ;
      ;
    case "slider":
      {
        ui.add_slider("[" + jolisa + "] " + kadance, "iy." + orvind, bahram, kaisee);
        preset.elements.push([jimia, orvind, zanaa]);
        break;
      }
  }
}, get: function (rino) {
  for (var lotha = 0; lotha < preset.elements.length; lotha++) {
    var erka = preset.elements[lotha];
    if (erka[1] == rino) {
      switch (erka[0]) {
        case "checkbox":
          {
            return vars.get_bool("js.iy." + erka[1]);
            break;
          }
          ;
          ;
        case "slider":
          {
            return vars.get_int("js.iy." + erka[1]);
            break;
          }
      }
    }
  }
}, set: function (french, keadra) {
  for (var charette = 0; charette < preset.elements.length; charette++) {
    var carloseduardo = preset.elements[charette];
    if (carloseduardo[1] == french) {
      switch (carloseduardo[0]) {
        case "checkbox":
          {
            vars.set_bool("js.iy." + carloseduardo[1], keadra);
            break;
          }
          ;
          ;
        case "slider":
          {
            vars.set_int("js.iy." + carloseduardo[1], keadra);
            break;
          }
      }
    }
  }
}, load: function () {
  if (!preset.get("preset.load")) {
    return;
  }
  ;
  for (var brandon = 0; brandon < preset.elements.length; brandon++) {
    var rudolf = preset.elements[brandon];
    preset.set(rudolf[1], rudolf[2]);
  }
}, custom: {get_key: function () {
  var hasnain = "";
  for (var luiza = 0; luiza < preset.elements.length; luiza++) {
    var clairice = preset.elements[luiza][1];
    hasnain += clairice + ":" + preset.get(clairice) + "_";
  }
  ;
  ;
  ;
  return hasnain;
}, load_key: function () {
  var bilinda = "{}";
  var matracia = bilinda.split("_");
  for (var nyheim = 0; nyheim < matracia.length; nyheim++) {
    var angelice = matracia[nyheim];
    var fitzhugh = angelice.split(":");
    if (fitzhugh[0].includes("preset")) {
      continue;
    }
    ;
    preset.set(fitzhugh[0], eval(fitzhugh[1]));
  }
}, load: function () {
  if (!preset.get("preset.custom.load")) {
    return;
  }
  ;
  preset.custom.load_key();
  notify.add("Success!", "Preset loaded from\nclipboard!");
  preset.set("preset.custom.load", false);
}, get: function () {
  if (!preset.get("preset.custom.get")) {
    return;
  }
  ;
  cheat.print_to_console(preset.custom.get_key() + "\n", [0, 255, 255]);
  notify.add("Success!", "Check console to get\npreset key. Send\nkey to a friend!");
  preset.set("preset.custom.get", false);
}}};
var script = {screensize: render.get_screen_size(), name: "ONE-CORD.js", version: "alpha", user: "quuenton"};
var log = {list: [], add: function (belua) {
  cheat.print_to_console("[ONE-CORD.js] ", [233, 129, 127]);
  cheat.print_to_console(belua + "\n", [255, 255, 255]);
  log.list.push([belua, global_vars.realtime(), 255]);
}, event: function () {
  if (log.list.length <= 0) {
    return;
  }
  ;
  if (log.list.length > 6) {
    log.list.shift();
  }
  ;
  if (log.list[0][1] + 6.5 < global_vars.realtime()) {
    log.list[0][2] -= global_vars.frametime() * 400;
    if (log.list[0][2] < 0) {
      log.list.shift();
    }
  }
}, run: function () {
  if (log.list.length <= 0) {
    return;
  }
  ;
  if (!entity.get_local_player()) {
    return;
  }
  ;
  for (i = 0; i < log.list.length; i++) {
    var breeanna = draw.get_text_size("[ONE-CORD.js] " + log.list[i][0]) + 10;
    var jaquaveon = [script.screensize[0] / 2 - breeanna / 2, script.screensize[1] / 1.15 - 15 * i];
    render.text([jaquaveon[0] + 5, jaquaveon[1] + 10], draw.override_alpha(draw.rainbow, log.list[i][2]), 12, 0, "[ONE-CORD.js]");
    render.text([jaquaveon[0] + draw.get_text_size("[ONE-CORD.js] ") + 5, jaquaveon[1] + 10], [230, 230, 230, log.list[i][2]], 12, 0, log.list[i][0]);
  }
}};
var notify = {list: [], add: function (leonette, cherrie) {
  notify.list.push([leonette, cherrie, global_vars.realtime(), 255]);
}, event: function () {
  if (notify.list.length <= 0) {
    return;
  }
  ;
  if (notify.list.length > 4) {
    notify.list.shift();
  }
  ;
  if (notify.list[0][2] + 6.5 < global_vars.realtime()) {
    notify.list[0][3] -= global_vars.frametime() * 400;
    if (notify.list[0][3] < 0) {
      notify.list.shift();
    }
  }
}, run: function () {
  if (notify.list.length <= 0) {
    return;
  }
  ;
  if (!entity.get_local_player()) {
    return;
  }
  ;
  var raigyn = 0;
  for (i = 0; i < notify.list.length; i++) {
    var annalisa = draw.get_text_size("[ONE-CORD.js] " + notify.list[i][1]) + 10;
    var israyel = notify.list[i][1].split("\n");
    var sheldon = israyel.length * 10 + 10 + 15;
    var shantai = [script.screensize[0] - annalisa - 10, script.screensize[1] - sheldon - 10 + raigyn];
    raigyn -= sheldon + 10;
    draw.window(shantai, [annalisa, sheldon], notify.list[i][3] / 255);
    render.circle([shantai[0] + 9, shantai[1] + 10], 6, draw.override_alpha(draw.rainbow, notify.list[i][3]), 50);
    render.text([shantai[0] + 7.5, shantai[1] + 9.5], draw.override_alpha(draw.rainbow, notify.list[i][3]), 12, 0, "!");
    render.text([shantai[0] + 20, shantai[1] + 10], [230, 230, 230, notify.list[i][3]], 12, 4, notify.list[i][0]);
    for (d = 0; d < israyel.length; d++) {
      render.text([shantai[0] + 5, shantai[1] + 25 + 10 * d], [230, 230, 230, notify.list[i][3]], 12, 0, israyel[d]);
    }
  }
}};
ui.add_slider("                       ONE-CORD.js v1.0", "", 0, 0);
var updates = [["[26.03]\nUWU.js v.1.1", "+", "2"]];
var updates2 = [["[27.03]\nRename UWU.js in ONE-CORD.js\nHitchances air\nRGB Line", "+", "2"]];
notify.add("Builded", "Stable builded v1.4\nBuilded at 31.03   ");
notify.add("Hello!", "Thank you for the purchase ONE-CORD.js!\nCoded by\nSkids\nDeobfuscated by \nQuuenton, quuenton#2875");
var aureliano = ["", "log", "", "get_screen_size", "[Clantag] Clock", "timetag", "add_checkbox", "[Clantag] Frontliners", "frontlinertag", "[AA] Step Jitter", "advjit", "[AA] Random Body Lean (:Trole:)", "randomize_BodyLean", "[AA] Roll AA (Experimental)", "Roll", "Minimum Roll Value", "rollmin", "add_slider", "Maximum Roll Value", "rollmax", "[Preset] Low Delta (In game)", "low_delta", "[Preset] Tonk AA", "tonk_aa", "", "empty", "Infinite was here :3", "js.rollmin", "get_int", "js.rollmax", "js.Roll", "get_bool", "random_int", "override_body_lean", "js.randomize_BodyLean", "set_bool", "js.low_delta", "set_int", "js.tonk_aa", "js.advjit", "Frontliners", "#define = ?", "𝐄𝐄𝐄.", "js.frontlinertag", "js.timetag", "curtime", "getHours", "0", "getMinutes", "getSeconds", ":", "set_clantag", "createmove", "render", "shift", "push", "visual", "            ", "misc", "Advanced jitter", "1290552zxrRoG", "lumen.", "6UdFQxZ", "                   ", "2pjrQsB", "skiper", "             Online users: ", "js.cten", "717488fpOJLm", "get_menu_position", "lumen.j", "welcome4", "                ", "1276380NWEIIV", "72411kTqsoy", "                 ", "1282689FpcAFJ", "toFixed", "3wFCycU", "lum", "get_username", "1112140fEQktC", "welcome3", "ragebot", "welcome2", "antiaim.trigger[0].jitter_angle", "559888UAedCC", "rb_brain", "Clantag (pls)", "lumen"];
var screen_size = render[aureliano[3]]();
preset.add("checkbox", "PRESET", "Load default preset", "preset.load", false);
preset.add("checkbox", "ANTIAIM", "Legbreaker", "legbreaker", true);
preset.add("checkbox", "ANTIAIM", "Adaptive Silent", "adp", false);
preset.add("checkbox", "ANTIAIM", "AntiAim Improver", "aa", false);
preset.add("slider", "ANTIAIM", "Type select", "antiaim_type", 5, 1, 6);
ui.add_checkbox("[ANTIAIM] Tank-AA", "suntcauntank");
ui.add_checkbox("[ANTIAIM] Ideal Lean", "ilean");
ui.add_checkbox("[ANTIAIM] Roll", "rl");
ui.add_checkbox("[ANTIAIM] Enable Anti-AntiROLL", "roll");
ui.add_checkbox("[ANTIAIM] Inverter on shot", "IDEALYAW_0x4b9175");
ui.add_checkbox("[ANTIAIM] Yaw correction", "correction", 0, 360);
ui.add_slider("[ANTIAIM] Yaw", "yaw", 0, 360);
ui.add_checkbox("[RAGE] Hitchance Air", "jumpscout");
ui.add_slider("[RAGE] Hitchance Air [Scout]", "htscout", 1, 100);
ui.add_slider("[RAGE] Hitchance Air [R8]", "htr8", 1, 100);
ui.add_slider("[RAGE] Hitchance Def [Scout]", "htscoutdef", 1, 100);
ui.add_slider("[RAGE] Hitchance Def [R8]", "htr8def", 1, 100);
preset.add("checkbox", "RAGE", "Doubletap insecure", "doubletap", true);
preset.add("checkbox", "MISC", "Clantag", "clantag", true);
preset.add("checkbox", "MISC", "Trashtalk", "trashtalk", true);
preset.add("checkbox", "MISC", "Logs", "logs", true);
ui.add_checkbox("[INDICATOR] RGB Line", "1: RGB Line");
preset.add("checkbox", "INDICATOR", "Watermark", "watermark", true);
preset.add("checkbox", "INDICATOR", "Binds list", "keybinds", true);
preset.add("slider", "INDICATOR", "Binds list position x", "keybinds.x", 290, 0, script.screensize[0]);
preset.add("slider", "INDICATOR", "Binds list position y", "keybinds.y", 650, 0, script.screensize[1]);
preset.add("checkbox", "INDICATOR", "Indicators list", "indicators", true);
preset.add("checkbox", "INDICATOR", "Damage marker", "dmgmarker", true);
var pet = {pos_x: 0, pos_y: 0, run: function () {
  if (!preset.get("pet")) {
    return;
  }
  ;
  var kacper = render.world_to_screen(helper.extrapolate_tick(entity.get_local_player(), -3));
  pet.pos_x = draw.lerp(pet.pos_x, kacper[0] + 100, 6 * global_vars.frametime());
  pet.pos_y = draw.lerp(pet.pos_y, kacper[1], 6 * global_vars.frametime());
  var elosie = [pet.pos_x, pet.pos_y];
  var marlenia = [150, 150];
  var veranda = script.user + "`s pet";
  draw.window([elosie[0] + 75 - (draw.get_text_size(veranda) + 10) / 2, elosie[1] - 20], [draw.get_text_size(veranda) + 10, 15], 1);
  render.text([elosie[0] + 75 - (draw.get_text_size(veranda) + 10) / 2 + 3, elosie[1] - 12], [255, 255, 255, 255], 12, 0, veranda);
  render.picture("C:\\one-cord\\pet.png", elosie, marlenia, 255);
}};
var hitsound = {run: function () {
  if (!preset.get("hitsound")) {
    return;
  }
  ;
  var mohannad = entity.get_player_for_user_id(current_event.get_int("userid"));
  var shervonda = entity.get_player_for_user_id(current_event.get_int("attacker"));
  if (shervonda == entity.get_local_player() && mohannad != entity.get_local_player()) {
    utils.play_sound("C:\\one-cord\\hit.wav");
  }
}};
function IDEALYAW_0x582c(irina, alesiram) {
  var merla = IDEALYAW_0x4a7c();
  return IDEALYAW_0x582c = function (lorimar, ahadu) {
    lorimar = lorimar - 191;
    var naisean = merla[lorimar];	
    return naisean;
  }, IDEALYAW_0x582c(irina, alesiram);
}
{
  function aa_invert() {
    var yeshwin = IDEALYAW_0x4b9175;
    if (!vars.get_bool("js.iy.inverter_shot")) {
      return;
    }
    ;
    vars[yeshwin(340)](yeshwin(342), vars[yeshwin(256)](yeshwin(342)));
  }
}
function yaw_setup() {
  if (vars.get_bool("js.correction")) {
    antiaim.override_body_lean(vars.get_int("js.yaw"));
  } else {
    antiaim.override_body_lean(120);
  }
}
register_callback("createmove", yaw_setup);
var stage1 = 0;
var stage2 = 35;
function idealyaw() {
  var adreyona = vars.get_int("js.ilean");
  if (adreyona) {
    var yuepheng = vars.get_int("antiaim.roll_amount");
    if (yuepheng == 35) {
      stage1 = 1;
    }
    ;
    if (yuepheng == -35) {
      stage1 = 0;
    }
    ;
    if (stage1 == 1) {
      stage2 -= 10;
      vars.set_int("antiaim.roll_amount", stage2);
    } else {
      stage2 += 10;
      vars.set_int("antiaim.roll_amount", stage2);
    }
  }
}
register_callback("createmove", idealyaw);
function darwinisgay() {
  var lushus = vars.get_int("js.suntcauntank");
  if (lushus) {
    var christieann = vars.get_int("antiaim.trigger[2].jitter_angle");
    if (christieann == 30) {
      selly = 1;
    }
    ;
    if (christieann == -25) {
      selly = 0;
    }
    ;
    if (selly == 0) {
      gamios = 30;
      vars.set_int("antiaim.trigger[2].jitter_angle", gamios);
    } else {
      gamios = -25;
      vars.set_int("antiaim.trigger[2].jitter_angle", gamios);
    }
  }
}
vars.set_int("js.htscout", 27);
vars.set_int("js.htr8", 14);
vars.set_int("js.htscoutdef", 75);
vars.set_int("js.htr8def", 53);
function jumpscout() {
  if (vars.get_bool("js.jumpscout")) {
    var hamiz = entity.get_flags(entity.get_local_player()) & 1;
    var kyshaun = vars.get_int("js.htr8");
    var nyeesha = vars.get_int("js.htscout");
    var thuyvy = vars.get_int("js.htr8def");
    var iam = vars.get_int("js.htscoutdef");
    if (hamiz) {
      vars.set_int("ragebot.weapons[2].hitchance", iam);
      vars.set_int("ragebot.weapons[6].hitchance", thuyvy);
    } else {
      vars.set_int("ragebot.weapons[2].hitchance", nyeesha);
      vars.set_int("ragebot.weapons[6].hitchance", kyshaun);
    }
  }
}
register_callback("createmove", jumpscout);
function HSVtoRGB(sopia, amelina, macson) {
  var lexcie, katyanna, loey, nikira, spaulding, anvit, tranel, jaiaire;
  if (arguments.length === 1) {
    amelina = sopia.s, macson = sopia.v, sopia = sopia.h;
  }
  ;
  nikira = Math.floor(sopia * 6);
  spaulding = sopia * 6 - nikira;
  anvit = macson * (1 - amelina);
  tranel = macson * (1 - spaulding * amelina);
  jaiaire = macson * (1 - (1 - spaulding) * amelina);
  switch (nikira % 6) {
    case 0:
      lexcie = macson, katyanna = jaiaire, loey = anvit;
      break;
    case 1:
      lexcie = tranel, katyanna = macson, loey = anvit;
      break;
    case 2:
      lexcie = anvit, katyanna = macson, loey = jaiaire;
      break;
    case 3:
      lexcie = anvit, katyanna = tranel, loey = macson;
      break;
    case 4:
      lexcie = jaiaire, katyanna = anvit, loey = macson;
      break;
    case 5:
      lexcie = macson, katyanna = anvit, loey = tranel;
      break;
  }
  ;
  return {r: Math.round(lexcie * 255), g: Math.round(katyanna * 255), b: Math.round(loey * 255)};
}
function draw() {
  if (vars.get_bool("js.1: RGB Line")) {
    var lillynn = entity.get_local_player();
    if (!lillynn) {
      return;
    }
    ;
    var regal = HSVtoRGB(global_vars.tick_count() % 350 / 350, 1, 1);
    var dalibor = render.get_screen_size();
    render.filled_rect([0, 0], [dalibor[0], 3], [regal.r, regal.g, regal.b, 255], 0);
  }
}
register_callback("render", draw);
const aarol = {roll: function () {
  var roll = vars.get_int("js.roll");
  if (roll) {
    var dayren = entity.get_local_player();
    function coffy(cavanaugh) {
      var jayme = entity.get_velocity(cavanaugh);
      return Math.sqrt(jayme[0] * jayme[0] + jayme[1] * jayme[1]);
    }
    if (coffy(dayren) > 216) {
      vars.set_int("antiaim.roll", 0);
    } else {
      vars.set_int("antiaim.roll", 2);
    }
  }
}};
register_callback("createmove", aarol.roll);
function roll() {
  var adonai = vars.get_int("js.rl");
  if (adonai) {
    var roenia = global_vars.tick_count() % 4 == 1 ? true : false;
    vars.set_bind_active("inverter", roenia);
  }
}
register_callback("createmove", roll);
const misc = {indicators: function () {
  var jimmiah = {fc: {text: [], color: []}};
  if (vars.is_bind_active("doubletap")) {
    jimmiah.fc.text.push("DoubleTap");
    jimmiah.fc.color.push([11, 247, 113, 255]);
  }
  ;
  if (vars.get_bool("js.legbreaker")) {
    jimmiah.fc.text.push("Legbreaker");
    jimmiah.fc.color.push([55, 79, 149, 255]);
  }
  ;
  if (vars.get_bool("js.indicators")) {
    render.text([939, 600], [55, 79, 121, 255], 888, 68888, "ONE-CORD.js");
    for (i = 0; i < jimmiah.fc.text.length; i++) {
      render.text([935, 600 + (i + 1) * 12], jimmiah.fc.color[i], 888888, 12, jimmiah.fc.text[i]);
    }
  }
}, legbreaker: function () {
  if (vars.get_bool("js.legbreaker")) {
    var jasion = 10 * Math.abs(Math.sin(64 * global_vars.realtime()));
    if (jasion > 5) {
      vars.set_bool("misc.slidewalk", false);
    } else {
      vars.set_bool("misc.slidewalk", true);
    }
  }
}, adp: function () {
  if (vars.get_bool("js.adp")) {
    var nyria = 10 * Math.abs(Math.sin(64 * global_vars.realtime()));
    if (nyria > 5) {
      vars.set_bool("ragebot.silent", true);
    } else {
      vars.set_bool("ragebot.silent", false);
    }
  }
}, aa: function () {
  if (vars.get_bool("js.aa")) {
    var zitlalli = 10 * Math.abs(Math.sin(64 * global_vars.realtime()));
    if (zitlalli > 5) {
      vars.set_bool("antiaim.attarget", true);
    } else {
      vars.set_bool("antiaim.attarget", false);
    }
  }
}};
var helper = {extrapolate_tick: function (arnola, trezure) {
  var jaryia = entity.get_origin(arnola), natividad = entity.get_velocity(arnola), agapita = [];
  return agapita[0] = jaryia[0] + natividad[0] * global_vars.interval_per_tick() * trezure, agapita[1] = jaryia[1] + natividad[1] * global_vars.interval_per_tick() * trezure, agapita[2] = jaryia[2] + natividad[2] * global_vars.interval_per_tick() * trezure, agapita;
}, getVelocity: function (carri) {
  var camera = entity.get_velocity(carri);
  return Math.sqrt(camera[0] * camera[0] + camera[1] * camera[1]);
}, distance: function (zeb, zira) {
  var antoan = zeb[0];
  var mauriana = zeb[1];
  var peng = zeb[2];
  var gesselle = zira[0];
  var rosheka = zira[1];
  var barnetta = zira[2];
  var malloy = antoan - gesselle;
  var yanielys = mauriana - rosheka;
  var shaman = peng - barnetta;
  return Math.sqrt(malloy * malloy + yanielys * yanielys + shaman * shaman);
}, atv: function (kaesin, braelinn) {
  return [Math.cos(kaesin * Math.PI / 180) * Math.cos(braelinn * Math.PI / 180), Math.cos(kaesin * Math.PI / 180) * Math.sin(braelinn * Math.PI / 180), -Math.sin(kaesin * Math.PI / 180)];
}};
var mathematic = {deg2rad: function (lashown) {
  return lashown * Math.PI / 180;
}};
var draw = {rainbow: [0, 0, 0, 0], hsv_to_rgb: function (ktherine, vikrant, siennah) {
  var madax, sebastion, katherine, augustis, jinni, zyonnah, noreene, almar;
  augustis = Math.floor(ktherine * 6);
  jinni = ktherine * 6 - augustis;
  zyonnah = siennah * (1 - vikrant);
  noreene = siennah * (1 - jinni * vikrant);
  almar = siennah * (1 - (1 - jinni) * vikrant);
  switch (augustis % 6) {
    case 0:
      madax = siennah, sebastion = almar, katherine = zyonnah;
      break;
    case 1:
      madax = noreene, sebastion = siennah, katherine = zyonnah;
      break;
    case 2:
      madax = zyonnah, sebastion = siennah, katherine = almar;
      break;
    case 3:
      madax = zyonnah, sebastion = noreene, katherine = siennah;
      break;
    case 4:
      madax = almar, sebastion = zyonnah, katherine = siennah;
      break;
    case 5:
      madax = siennah, sebastion = zyonnah, katherine = noreene;
      break;
  }
  ;
  ;
  ;
  return [Math.round(madax * 255), Math.round(sebastion * 255), Math.round(katherine * 255), 255];
}, lerp: function (mixtli, lashawanda, kamilah) {
  return mixtli + (lashawanda - mixtli) * kamilah;
}, color_lerp: function (welton, lelita, antimo) {
  return [draw.lerp(welton[0], lelita[0], antimo), draw.lerp(welton[1], lelita[1], antimo), draw.lerp(welton[2], lelita[2], antimo), draw.lerp(welton[3], lelita[3], antimo)];
}, get_text_size: function (marterrion) {
  var courtenay = marterrion.split("\n");
  var moore = 0;
  if (courtenay.length - 1 > 1) {
    for (var oktober = 0; oktober < courtenay.length; oktober++) {
      if (moore < courtenay[oktober].length * 5.3) {
        moore = courtenay[oktober].length * 5.3;
      }
    }
  } else {
    moore = marterrion.length * 5.3;
  }
  ;
  ;
  ;
  return moore;
}, override_alpha: function (gavin, skya) {
  return [gavin[0], gavin[1], gavin[2], skya];
}, gradient_filled_rect: function (eward, bettilou, duffie, arzona) {
  var minjae = bettilou[0] / 6;
  bettilou[0] = bettilou[0] / minjae;
  var raequawn = bettilou[0];
  for (var jasianna = 0; jasianna < raequawn; jasianna++) {
    var macalah = jasianna / raequawn;
    var kaarina = draw.color_lerp(duffie, arzona, macalah);
    render.line([eward[0] + minjae / 2 + jasianna * minjae, eward[1]], [eward[0] + minjae / 2 + jasianna * minjae, eward[1] + bettilou[1]], kaarina, minjae);
  }
}, gradient_text: function (temuulen, keito, nikolai, nyaylah, setareh) {
  var christabell = keito.length;
  for (var alexe = 0; alexe < christabell; alexe++) {
    var shadrack = alexe / christabell;
    var davonte = draw.color_lerp(nikolai, nyaylah, shadrack);
    render.text([temuulen[0] + 5.3 * alexe, temuulen[1]], davonte, 13, 0, keito[alexe]);
  }
}, arc: function (faithlyn, uland, evalene, samay, rubin, brookelyne) {
  var samay = mathematic.deg2rad(samay);
  var rubin = mathematic.deg2rad(samay + rubin);
  var tayt = mathematic.deg2rad(20);
  for (var andrell = samay; andrell < rubin; andrell += tayt) {
    var zyran = Math.cos(andrell);
    var alaney = Math.sin(andrell);
    render.line([faithlyn[0] + zyran * uland, faithlyn[1] + alaney * uland], [faithlyn[0] + zyran * evalene, faithlyn[1] + alaney * evalene], brookelyne, 1);
  }
}, window: function (leovigildo, zaair, esra) {
  render.filled_rect(leovigildo, zaair, [255, 255, 255, 20 * esra], 0);
  draw.gradient_filled_rect(leovigildo, [zaair[0], 2], [draw.rainbow[0], draw.rainbow[1], draw.rainbow[2], 255 * esra], [draw.rainbow[1], draw.rainbow[2], draw.rainbow[0], 255 * esra]);
}, run: function () {
  draw.rainbow = draw.hsv_to_rgb(global_vars.realtime() * .2, 1, 1);
}};
var clantag = {name: "", store: script.name, lasttime: 0, switch_set: false, active: false, run: function () {
  if (!preset.get("clantag")) {
    if (clantag.active) {
      cheat.set_clantag("");
      clantag.active = false;
    }
    ;
    return;
  }
  ;
  clantag.active = true;
  if (global_vars.curtime() - clantag.lasttime > .3) {
    clantag.lasttime = global_vars.curtime();
    if (clantag.name.length == 0) {
      clantag.switch_set = true;
    } else {
      if (clantag.name.length == clantag.store.length) {
        clantag.switch_set = false;
      }
    }
    ;
    ;
    ;
    if (clantag.switch_set) {
      clantag.name += clantag.store[clantag.name.length++];
    } else {
      clantag.name = clantag.name.substr(0, clantag.name.length - 1);
    }
    ;
    ;
    ;
    cheat.set_clantag("> " + clantag.name + " $");
  }
}};
var trashtalk = {phrases: ["discord.gg/jnwVNbJP best js and cfg for weave and other cheat", "Сори шо убил.", "Нихуя ультанул", "Ох щит,звоните в скорую", "Лол", "Найс килл на лаки", "мне норм"], run: function () {
  if (!preset.get("trashtalk")) {
    return;
  }
  ;
  var lyris = entity.get_player_for_user_id(current_event.get_int("userid"));
  var marquille = entity.get_player_for_user_id(current_event.get_int("attacker"));
  var jalenn = entity.get_local_player();
  if (jalenn != lyris && marquille != lyris && marquille == jalenn) {
    cheat.execute_command("say " + trashtalk.phrases[math.random_int(0, trashtalk.phrases.length)]);
  }
}};
var logging = {event_hurt: function () {
  if (!preset.get("logs")) {
    return;
  }
  ;
  var kyeon = entity.get_player_for_user_id(current_event.get_int("userid"));
  var vernecia = entity.get_player_for_user_id(current_event.get_int("attacker"));
  var caelee = entity.get_player_info(kyeon);
  var jadira = entity.get_player_info(vernecia);
  var seydou = current_event.get_int("hitgroup");
  switch (seydou) {
    case 1:
      seydou = "head";
      break;
    case 2:
      seydou = "chest";
      break;
    case 3:
      seydou = "stomach";
      break;
    case 4:
      seydou = "left arm";
      break;
    case 5:
      seydou = "right arm";
      break;
    case 6:
      seydou = "right leg";
      break;
    case 7:
      seydou = "left leg";
      break;
    default:
      seydou = "generic";
  }
  ;
  ;
  ;
  if (vernecia == entity.get_local_player() && kyeon != entity.get_local_player()) {
    log.add("Hit entity: " + caelee.name + ", hitgroup: " + seydou + ", damage: " + current_event.get_int("dmg_health"));
  } else {
    if (kyeon == entity.get_local_player() && vernecia != entity.get_local_player()) {
      log.add("Hurt from entity: " + jadira.name + ", hitgroup: " + seydou + ", damage: " + current_event.get_int("dmg_health"));
    }
  }
}, event_miss: function () {
  if (!preset.get("logs")) {
    return;
  }
  ;
  var anndee = entity.get_player_info(current_event.get_int("player_index"));
  var ragna = current_event.get_int("hitbox");
  switch (ragna) {
    case 1:
      ragna = "head";
      break;
    case 2:
      ragna = "chest";
      break;
    case 3:
      ragna = "stomach";
      break;
    case 4:
      ragna = "left arm";
      break;
    case 5:
      ragna = "right arm";
      break;
    case 6:
      ragna = "right leg";
      break;
    case 7:
      ragna = "left leg";
      break;
    default:
      ragna = "generic";
  }
  ;
  ;
  ;
  if (current_event.get_int("player_index") != entity.get_local_player()) {
    log.add("Miss to: " + anndee.name + ", hitbox: " + ragna + ", to: " + (current_event.get_string("resolver_mode") == "" ? "spread" : "resolver"));
  }
}};
var hitsound = {run: function () {
  if (!preset.get("hitsound")) {
    return;
  }
  ;
  var maralee = entity.get_player_for_user_id(current_event.get_int("userid"));
  var kareny = entity.get_player_for_user_id(current_event.get_int("attacker"));
  if (kareny == entity.get_local_player() && maralee != entity.get_local_player()) {
    utils.play_sound("C:\\ONE-CORD.js\\hit.wav");
  }
}};
var pet = {pos_x: 0, pos_y: 0, run: function () {
  if (!preset.get("pet")) {
    return;
  }
  ;
  var jenisa = render.world_to_screen(helper.extrapolate_tick(entity.get_local_player(), -3));
  pet.pos_x = draw.lerp(pet.pos_x, jenisa[0] + 100, 6 * global_vars.frametime());
  pet.pos_y = draw.lerp(pet.pos_y, jenisa[1], 6 * global_vars.frametime());
  var elizabethgrace = [pet.pos_x, pet.pos_y];
  var whitley = [150, 150];
  var sorai = script.user + "`s pet";
  draw.window([elizabethgrace[0] + 75 - (draw.get_text_size(sorai) + 10) / 2, elizabethgrace[1] - 20], [draw.get_text_size(sorai) + 10, 15], 1);
  render.text([elizabethgrace[0] + 75 - (draw.get_text_size(sorai) + 10) / 2 + 3, elizabethgrace[1] - 12], [255, 255, 255, 255], 12, 0, sorai);
  render.picture("C:\\ONE-CORD.js\\pet.png", elizabethgrace, whitley, 255);
}};
var watermark = {run: function () {
  if (!preset.get("watermark")) {
    return;
  }
  ;
  var etha = cheat.get_desync_amount() < 0 ? -cheat.get_desync_amount() : cheat.get_desync_amount();
  var gerlene = etha <= 1 ? "" : "    ";
  var ronson = [];
  ronson.push(script.name + gerlene);
  ronson.push(script.version);
  ronson.push(script.user);
  ronson.push((new Date).toTimeString().substring(0, 8));
  var corabelle = ronson.join(" | ");
  var rane = draw.get_text_size(corabelle) + 10;
  var jannely = [script.screensize[0] - rane - 10, 10];
  var dasja = [rane, 20];
  draw.window(jannely, dasja, 1);
  draw.arc([jannely[0] + 5 + draw.get_text_size(script.name) + 10, jannely[1] + 10], 5, 3, 0, 6.2 * etha, draw.rainbow);
  render.text([jannely[0] + 5, jannely[1] + 10], [255, 255, 255, 255], 12, 0, corabelle);
}};
var keybinds = {list: [["force_safepoints", "Force Safepoints"], ["body_aim", "Force Body"], ["override_damage", "Override Damage"], ["ensure_lean", "Always Lean"], ["inverter", "Inverter"], ["manual_left", "Manual: <"], ["manual_right", "Manual: >"], ["manual_back", "Manual: \\/"], ["manual_forward", "Manual: /\\"], ["fake_duck", "Fake Duck"], ["slow_walk", "Slow Walk"], ["doubletap", "Fast Fire"], ["hide_shots", "Hide Fire"], ["thirdperson", "Third person"], ["peek_assist", "Peek Assist"]], active_list: function () {
  var garine = [];
  for (var jacin = 0; jacin < keybinds.list.length; jacin++) {
    if (vars.is_bind_active(keybinds.list[jacin][0])) {
      garine.push([keybinds.list[jacin][1], draw.get_text_size(keybinds.list[jacin][0])]);
    }
  }
  ;
  ;
  ;
  return garine;
}, width: 50, alpha: 0, run: function () {
  if (!preset.get("keybinds")) {
    return;
  }
  ;
  var rinette = keybinds.active_list();
  var gwendlyn = [preset.get("keybinds.x"), preset.get("keybinds.y")];
  var letcher = 50;
  for (var genie = 0; genie < rinette.length; genie++) {
    if (letcher < rinette[genie][1]) {
      letcher = rinette[genie][1];
    }
  }
  ;
  ;
  ;
  if (rinette.length <= 0) {
    letcher = 50;
  }
  ;
  keybinds.width = draw.lerp(keybinds.width, letcher, 6 * global_vars.frametime());
  if (rinette.length <= 0 && !ui.get_menu_alpha()) {
    keybinds.alpha = draw.lerp(keybinds.alpha, 0, 6 * global_vars.frametime());
  } else {
    keybinds.alpha = draw.lerp(keybinds.alpha, 1, 6 * global_vars.frametime());
  }
  ;
  ;
  ;
  var tiree = keybinds.width + 40;
  draw.window(gwendlyn, [tiree, 20], keybinds.alpha);
  render.text([gwendlyn[0] + tiree / 2 - draw.get_text_size("KeyBinds") / 2, gwendlyn[1] + 10], [255, 255, 255, 255 * keybinds.alpha], 12, 0, "KeyBinds");
  for (var genie = 0; genie < rinette.length; genie++) {
    render.text([gwendlyn[0] + 5, gwendlyn[1] + 26 + 13 * genie], [255, 255, 255, 255 * keybinds.alpha], 12, 0, rinette[genie][0]);
    render.text([gwendlyn[0] + tiree - draw.get_text_size("[on]") - 5, gwendlyn[1] + 26 + 13 * genie], [255, 255, 255, 255 * keybinds.alpha], 12, 0, "[on]");
  }
}};
var indicators = {animation_var1: 0, list: [["override_damage", "dmg"], ["fake_duck", "duck"], ["doubletap", "rapid"], ["hide_shots", "osaa"]], active_list: function () {
  var mackinze = [];
  for (var brizza = 0; brizza < indicators.list.length; brizza++) {
    if (vars.is_bind_active(indicators.list[brizza][0])) {
      mackinze.push([indicators.list[brizza][1]]);
    }
  }
  ;
  ;
  ;
  return mackinze;
}, run: function () {
  if (!preset.get("indicators")) {
    return;
  }
  ;
  var davarus = cheat.get_desync_amount() < 0 ? -cheat.get_desync_amount() : cheat.get_desync_amount();
  indicators.animation_var1 = draw.lerp(indicators.animation_var1, davarus, 6 * global_vars.frametime());
  var amartya = [script.screensize[0] / 2 + 5, script.screensize[1] / 2 + 30];
  var kelyse = indicators.active_list();
  var sefton = "ONE-CORD";
  var scoey = "   .js";
  render.text([amartya[0], amartya[1]], [255, 255, 255, 255], 12, 0, sefton);
  draw.gradient_text([amartya[0] + draw.get_text_size(sefton), amartya[1]], scoey, [255, 255, 255, 255], draw.rainbow);
  render.filled_rect([amartya[0], amartya[1] + 6], [indicators.animation_var1 + 2, 3], draw.rainbow, 0);
  render.filled_rect([amartya[0] + 1, amartya[1] + 7], [indicators.animation_var1, 1], [255, 255, 255, 255], 0);
  for (var unnamed = 0; unnamed < kelyse.length; unnamed++) {
    var tremyah = kelyse[unnamed];
    render.text([amartya[0], amartya[1] + 15 + 8 * unnamed], [255, 255, 255, 255], 13, 0, tremyah[0]);
  }
}};
var damagemarker = {hits: [], event: function () {
  var javein = entity.get_player_for_user_id(current_event.get_int("attacker"));
  var asianae = entity.get_player_for_user_id(current_event.get_int("userid"));
  var kwyn = current_event.get_int("dmg_health");
  var anilya = current_event.get_int("hitgroup");
  var kylieanna = [255, 255, 255, 255];
  if (anilya == 1) {
    kylieanna = [241, 193, 194, 255];
  }
  ;
  if (javein == entity.get_local_player() && javein != asianae) {
    var kamila = entity.get_origin(asianae);
    kamila[2] += 64;
    kamila[1] += math.random_int(-10, 10);
    kamila[0] += math.random_int(-10, 10);
    damagemarker.hits.push({ent: asianae, position: kamila, alpha: 25550, damage: kwyn, color: kylieanna, offset: 0});
  }
}, run: function () {
  if (!preset.get("dmgmarker")) {
    return;
  }
  ;
  for (var vija = 0; vija < damagemarker.hits.length; vija++) {
    damagemarker.hits[vija].alpha = draw.lerp(damagemarker.hits[vija].alpha, 0, 4 * global_vars.frametime());
    damagemarker.hits[vija].color[3] = Math.min(255, damagemarker.hits[vija].alpha);
    damagemarker.hits[vija].offset += 50 * global_vars.frametime();
    var athiran = render.world_to_screen(damagemarker.hits[vija].position);
    if (damagemarker.hits[vija].alpha > 0) {
      render.text([athiran[0], athiran[1] - damagemarker.hits[vija].offset], damagemarker.hits[vija].color, 12, 0, "" + damagemarker.hits[vija].damage);
    } else {
      damagemarker.hits.shift();
    }
  }
}};
var oneway_helper = {locations: {de_mirage: [["All", "Palace", "Fakeduck", "Oneway", [-779.28, -1180.53, -80.18], [-2.4, -50.97], 0, 0, 0, 0], ["Snipers", "A Plant", "Fakeduck", "Oneway", [-670.71, -888.87, -199.54], [-1.62, -88.13], 0, 0, 0, 0], ["Snipers", "A Plant", "Fakeduck", "Oneway", [-496.49, -1437.86, -38.47], [6.83, -81.63], 0, 0, 0, 0], ["Snipers", "City", "Manual <, Hide Shots", "Oneway", [-496.1, -1386.59, -79.49], [3.39, -110.49], 0, 0, 0, 0], ["All", "Pit", "Fakeduck", "Oneway", [-60.1, -1842.1, -127.97], [-0.02, 45.24], 0, 0, 0, 0], ["Snipers", "Pit", "Fakeduck", "Oneway", [-288.43, -2099.6, -60.97], [6.61, 48.95], 0, 0, 0, 0], ["Snipers", "Long", "Min dmg", "Oneway", [348.88, 781.92, -95.97], [3.43, -105.42], 0, 0, 0, 0], ["Snipers", "T Spawn", "Min dmg", "Oneway", [162.42, 774.1, -95.97], [2.07, -22.56], 0, 0, 0, 0], ["Snipers", "B Palace", "Min dmg", "Oneway", [-431.17, 754.45, -43.97], [1.55, -153.42], 0, 0, 0, 0], ["Snipers", "B Palace", "Min dmg", "Oneway", [-668.26, 615.99, -39.71], [4.48, 19.95], 0, 0, 0, 0], ["Snipers", "Kitchen", "Hide shots", "Oneway", [-2238.48, 657.25, .03], [4.29, -70.62], 0, 0, 0, 0], ["Snipers", "Kitchen", "Fakeduck", "Profitable", [-2368.22, 777.51, -41.14], [3.54, -87.06], 0, 0, 0, 0], ["Snipers", "A Plant", "Min dmg", "Profitable", [-1501.56, -1598.99, -220.28], [-0.45, -80.33], 0, 0, 0, 0], ["All", "Kitchen", "Fakeduck", "Oneway", [-1708.2, -1253.87, -214.84], [-5.92, 81.89], 0, 0, 0, 0], ["SCAR, AWP", "Carpets", "Doubletap, Hide Shots", "RIP-ESP", [-1544.41, -2407.83, -200.26], [-5.93, 9.16], 0, 0, 0, 0]], de_vertigo: [], de_bank: []}, get_map: function () {
  switch (preset.get("helpers.map")) {
    case 1:
      return "de_mirage";
    case 2:
      return "de_vertigo";
    case 3:
      return "de_bank";
  }
  ;
  ;
  ;
  return "de_mirage";
}, run: function () {
  if (!preset.get("helpers.oneway")) {
    return;
  }
  ;
  var rebert = oneway_helper.locations[oneway_helper.get_map()];
  for (var krist = 0; krist < rebert.length; krist++) {
    var aminta = rebert[krist];
    var raqiya = render.world_to_screen(aminta[4]);
    var jillisa = entity.get_local_player();
    if (helper.distance(aminta[4], entity.get_origin(jillisa)) > 400) {
      aminta[6] = draw.lerp(aminta[6], 0, 6 * global_vars.frametime());
    } else {
      aminta[6] = draw.lerp(aminta[6], 255, 6 * global_vars.frametime());
    }
    ;
    ;
    ;
    if (!aminta[6]) {
      continue;
    }
    ;
    if (helper.distance(aminta[4], entity.get_origin(jillisa)) > 200) {
      aminta[7] = draw.lerp(aminta[7], 0, 6 * global_vars.frametime());
    } else {
      aminta[7] = draw.lerp(aminta[7], 255, 6 * global_vars.frametime());
    }
    ;
    ;
    ;
    if (helper.distance(aminta[4], entity.get_origin(jillisa)) > 50) {
      aminta[8] = draw.lerp(aminta[8], 1, 6 * global_vars.frametime());
    } else {
      aminta[8] = draw.lerp(aminta[8], 0, 6 * global_vars.frametime());
    }
    ;
    ;
    ;
    render.text(raqiya, [255, 255, 255, aminta[6] * aminta[8]], 12, 0, aminta[1]);
    render.text([raqiya[0], raqiya[1] + 13], [255, 255, 255, aminta[7] * aminta[8]], 12, 0, "Wpn: " + aminta[0]);
    render.circle([raqiya[0] - 10, raqiya[1]], 5, [255, 255, 255, aminta[6] * aminta[8]], 14);
    if (aminta[8] <= .9) {
      var graeden = 1 - aminta[8];
      var danico = helper.atv(aminta[5][0], aminta[5][1]);
      var whittni = render.world_to_screen([aminta[4][0] + danico[0] * 200, aminta[4][1] + danico[1] * 200, aminta[4][2] + 23 + danico[2] * 200]);
      render.circle(whittni, 10, [255, 255, 255, 255 * graeden], 20);
      if (Math.abs(whittni[0] - script.screensize[0] / 2) + Math.abs(whittni[1] - script.screensize[1] / 2) > 40) {
        aminta[9] = draw.lerp(aminta[9], 0, 6 * global_vars.frametime());
      } else {
        aminta[9] = draw.lerp(aminta[9], 255, 6 * global_vars.frametime());
      }
      ;
      ;
      ;
      render.line(whittni, [script.screensize[0] / 2, script.screensize[1] / 2], [255, 255, 255, 255 - aminta[9] * graeden], 1);
      render.filled_circle(whittni, 5, [130, 230, 130, aminta[9] * graeden], 20);
      render.text([whittni[0] + 15, whittni[1]], [255, 255, 255, aminta[9] * graeden], 12, 0, aminta[2]);
      render.text([whittni[0] + 15, whittni[1] + 13], [255, 255, 255, aminta[9] * graeden], 12, 0, "|> " + aminta[3]);
    }
  }
}};
var aa = {type: "default", set_manual: function (talat, zaylei) {
  vars.set_bind_active("manual_" + talat, zaylei);
}, roll_aa: function () {
  var sacora = user_cmd.get_buttons();
  var bianney = entity.get_local_player();
  if (entity.get_flags(bianney) == 256) {
    aa.set_manual("right", false);
    aa.set_manual("left", false);
    return;
  }
  ;
  if (sacora & 512) {
    aa.set_manual("left", true);
    aa.set_manual("right", false);
    vars.set_bind_active("inverter", false);
  }
  ;
  if (sacora & 1024) {
    aa.set_manual("right", true);
    aa.set_manual("left", false);
    vars.set_bind_active("inverter", true);
  }
  ;
  vars.set_int("antiaim.roll", 3);
}, free_stand: function () {
  var deivid = user_cmd.get_buttons();
  var naftuli = entity.get_local_player();
  if (entity.get_flags(naftuli) == 256) {
    aa.set_manual("right", false);
    aa.set_manual("left", false);
    return;
  }
  ;
  if (deivid & 512) {
    aa.set_manual("right", true);
  } else {
    aa.set_manual("right", false);
  }
  ;
  ;
  ;
  if (deivid & 1024) {
    aa.set_manual("left", true);
  } else {
    aa.set_manual("left", false);
  }
}, fake_flick: function () {
  if (helper.getVelocity(entity.get_local_player()) > 5) {
    return;
  }
  ;
  var damauri = vars.is_bind_active("inverter") ? -1 : 1;
  setyaw = function (obera) {
    vars.set_int("antiaim.trigger[0].yaw_add", obera);
  };
  switch (global_vars.tick_count() % 40) {
    case 0:
      {
        setyaw(0);
        break;
      }
      ;
      ;
    case 35:
      {
        setyaw(120 * damauri);
        break;
      }
  }
}, updates: function () {
  switch (global_vars.tick_count() % 40) {
    case 0:
      {
        vars.set_bool("antiaim.desync", true);
        break;
      }
      ;
      ;
    case 35:
      {
        vars.set_bool("antiaim.desync", false);
        break;
      }
  }
  ;
  ;
  ;
  vars.set_int("antiaim.roll", 2);
}, real_switch: function () {
  switch (global_vars.tick_count() % 60) {
    case 0:
      {
        antiaim.override_body_lean(60);
        break;
      }
      ;
      ;
    case 30:
      {
        antiaim.override_body_lean(120);
        break;
      }
  }
  ;
  ;
  ;
  vars.set_bool("antiaim.desync", true);
  vars.set_int("antiaim.roll", 2);
}, run: function () {
  switch (preset.get("antiaim_type")) {
    case 1:
      aa.type = "default";
      break;
    case 2:
      aa.type = "freestand";
      aa.free_stand();
      break;
    case 3:
      aa.type = "roll aa";
      aa.roll_aa();
      break;
    case 4:
      aa.type = "fake flick";
      aa.fake_flick();
      break;
    case 5:
      aa.type = "updates";
      aa.updates();
      break;
    case 6:
      aa.type = "real switch";
      aa.real_switch();
      break;
  }
}};
var doubletap = {run: function () {
  if (preset.get("doubletap")) {
    convars.set_int("cl_clock_correction", 0);
    convars.set_int("sv_maxusrcmdprocessticks", 18);
  } else {
    convars.set_int("cl_clock_correction", 1);
    convars.set_int("sv_maxusrcmdprocessticks", 16);
  }
}};
var menu = {run: function () {
  var mychala = ui.get_menu_position();
  var tayvon = ui.get_menu_size();
  var jeiza = ui.get_menu_alpha();
  var raelynne = [mychala[0] + tayvon[0] + 8, mychala[1]];
  var mazell = [160, tayvon[1]];
  render.filled_rect(raelynne, mazell, [16, 16, 16, 255 * jeiza], 5);
  render.text([raelynne[0] + 7, raelynne[1] + 12 + 0], [255, 255, 255, 255 * jeiza], 1e5, 1e7, "ONE-CORD.js");
  render.filled_rect([raelynne[0], raelynne[1] + 40 - 2], [mazell[0], 2], draw.override_alpha(draw.rainbow, 255 * jeiza), 5);
  var raelynne = [mychala[0] + tayvon[0] + 10, mychala[1] + 40];
  render.text([raelynne[0] + 7, raelynne[1] + 15 + 0], [255, 255, 255, 255 * jeiza], 12, 5, "Update log:");
  render.text([raelynne[0] + 7, raelynne[1] + 15 + 50], [255, 255, 255, 255 * jeiza], 12, 10, "[28.03]ONE CORD.js v1.3\n[+]Add Menu\n[+]Tank-AA\n[+]Ideal Lean\n[+]Yaw correction");
  render.text([raelynne[0] + 7, raelynne[1] + 15 + 130], [255, 255, 255, 255 * jeiza], 12, 10, "[29.03] ONE-CORD.js v.1.3\n[+]Fix Ideal Lean\n[+]Fix Trashtalk\n[+]Fix Menus\n[+]Inverter on shot");
  render.filled_rect([raelynne[0], raelynne[1] + 40 - -300], [mazell[0], 2], draw.override_alpha(draw.rainbow, 255 * jeiza), 5);
  render.text([raelynne[0] + 7, raelynne[1] + 15 + 380], [255, 255, 255, 255 * jeiza], 12, 10, "AntiAim Types:\n1. Default\n2. Freestand\n3. Roll\n4. Fake Flick\n5. Updates\n6. Real Switch");
  ;
}};
var unload = {run: function () {
  utils.play_sound("C:\\Windows\\Media\\Speech Off.wav");
  convars.set_int("cl_clock_correction", 1);
  convars.set_int("sv_maxusrcmdprocessticks", 16);
}};
const callbacks = {render: function () {
  misc.aa();
}, createmove: function () {
  misc.legbreaker();
  misc.adp();
}};
register_callback("render", function () {
  draw.run();
  pet.run();
  watermark.run();
  keybinds.run();
  indicators.run();
  damagemarker.run();
  oneway_helper.run();
  menu.run();
  log.event();
  log.run();
  notify.event();
  notify.run();
  preset.load();
  preset.custom.load();
  preset.custom.get();
});
register_callback("createmove", function () {
  clantag.run();
  aa.run();
});
register_callback("player_hurt", function () {
  logging.event_hurt();
  damagemarker.event();
  hitsound.run();
});
register_callback("ragebot_fire", function () {});
register_callback("ragebot_miss", function () {
  logging.event_miss();
});
register_callback("player_death", function () {
  trashtalk.run();
});
register_callback("unload", function () {
  unload.run();
});
	