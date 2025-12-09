import {Component} from '@angular/core';
import {  
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';
import { Utilizations } from './utilizations';
import { Tags } from './tags';
import { TagContentType } from '@angular/compiler';

type AnliegendeNutzungenFormRaw = {
   schule: boolean | null;
   altenheim: boolean | null;
   schwimmbad: boolean | null;
   sportplatz: boolean | null;
   gruenflaeche: boolean | null;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[ReactiveFormsModule]
})
export class App {
  utilizations: Array<{prio: number; strike: boolean; label: string; tags: Array<string>}> = [];
  statistik = new FormGroup({
    formative: new FormControl('', Validators.required),
    anliegendeNutzungen: new FormGroup({
      schule: new FormControl(false, Validators.required),
      altenheim: new FormControl(false, Validators.required),
      schwimmbad: new FormControl(false, Validators.required),
      sportplatz: new FormControl(false, Validators.required),
      gruenflaeche: new FormControl(false, Validators.required)
    }),  
    entrance: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    protection: new FormControl('', Validators.required),
    bausubstanz: new FormControl('', Validators.required),
    altersquotient: new FormControl('', Validators.required),
    jugendquotient: new FormControl('', Validators.required),
    youngAdults: new FormControl('', Validators.required),
    poverty: new FormControl('', Validators.required),
    stability: new FormControl('', Validators.required),
    migration: new FormControl('', Validators.required), 
  });

  constructor(){
    this.intializeUtilizationArray();
  }

  intializeUtilizationArray(this: any){
    this.utilizations = [];
    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.Mehrgeschossig, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Turnhalle});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.SportNutzung, Tags.ErfordertKeinLicht, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Kletterhalle});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.SportNutzung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Hallenbad});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.ZielgruppeKinder, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet, Tags.Mehrgeschossig], prio: 0, strike: false, label: Utilizations.IndoorSpielplatz});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum, Tags.SportNutzung, Tags.KulturelleEinrichtung], prio: 0, strike: false, label: Utilizations.Tanzschule});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum, Tags.Bildungseinrichtung, Tags.KulturelleEinrichtung], prio: 0, strike: false, label: Utilizations.Musikschule});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KulturelleEinrichtung, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.AtelierUndKreativraum});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Repaircafe});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Sozialcafe});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Jugendtreff});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Sozialhotel});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.ZielgruppeSenioren, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.AltenServiceZentrum});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Gemeindezentrum});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.SozialeEinrichtung, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Sozialkaufhaus});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Vereinszentrum});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Bildungseinrichtung, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.LernUndLeseOrt});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar], prio: 0, strike: false, label: Utilizations.Bibliothek});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Nachbarschaftsrestaurant});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Veranstaltungsraum});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.CoWorkingSpace});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.OffenesReligioesesZentrum});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Stadtpark});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.nichtRepraesentativ, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Gemeinschaftsgarten});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei, Tags.ZielgruppeKinder], prio: 0, strike: false, label: Utilizations.Spielplatz});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Marktplatz});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.RepraesentativStadt, Tags.SportNutzung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Freibad});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Sportplatz});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.KonstantesPublikum, Tags.Rentabel], prio: 0, strike: false, label: Utilizations.Tennisplatz});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.WohngruppeFrauenUndAlleinerziehend});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.WohngruppeJugendliche});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.BetreutesWohnen});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Rentabel, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.CoHousingProjekt});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.Wohnungslosenunterkunft});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.Gefluechtetenunterkunft});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Rentabel, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeSenioren, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar], prio: 0, strike: false, label: Utilizations.Mehrgenerationenwohnen});
    
    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Rentabel, Tags.ZielgruppeSenioren, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar], prio: 0, strike: false, label: Utilizations.GemeinschaftlichesAlterswohnen});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Kita});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.OffenesGanztagsAngebot});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.ZielgruppeJungeErwachsene, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Universitaetsgebaeude});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Infrastruktur, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Verwaltungsgebaeude});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.ErweiterungsbauSchule});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeSenioren, Tags.Wohnraumnutzung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.ErweiterungsbauAltenheim});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Volkshochschule});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Theater});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Konzertsaal});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.ZielgruppeJungeErwachsene, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Club});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertLicht, Tags.Mehrgeschossig, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Ausstellungsraum});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Kolumbarium});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Tafel});
    
    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.StudierendenUndAzubiWohnheim});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Gesundheitskiosk});

    this.utilizations.push({tags: [Tags.RepraesentativStadt, Tags.SportNutzung, Tags.ErfordertKeinLicht, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Eissportfläche});

    this.utilizations.push({tags: [Tags.Aussenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Amphitheater});

    this.utilizations.push({tags: [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.Infrastruktur, Tags.Rentabel, Tags.Mehrgeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.RecyclingZentrum});

    this.utilizations.push({tags: [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.Rentabel, Tags.Mehrgeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Handwerkshof});
    
    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Produktionshalle});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Grossmarkthalle});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Lagerhalle});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Baumarkt});

    this.utilizations.push({tags: [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertLicht, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Gartencenter});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Moebelhaus});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Rechenzentrum});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.StorageSpace});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.BlockHeizkraftwerk});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Waermepumpenstandort});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Batteriespeicher});

    this.utilizations.push({tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.MobilityHub});
  }

  calcUtilizations(this: any){
    this.intializeUtilizationArray();
    this.processFormative(this.statistik.value.formative);
    this.processAnliegendeNutzungen(this.statistik.getRawValue().anliegendeNutzungen);
    this.processEingang(this.statistik.value.entrance);
    this.processBautyp(this.statistik.value.type);
    this.processDenkmalschutz(this.statistik.value.protection);
    this.processBausubstanz(this.statistik.value.bausubstanz);
    this.processAltersquotient(this.statistik.value.altersquotient);
    this.processJugendquotient(this.statistik.value.jugendquotient);
    this.processJungeErwachsene(this.statistik.value.youngAdults);
    this.processArmutsquotient(this.statistik.value.poverty);
    this.processNachbarschaft(this.statistik.value.stability);
    this.processMigrationshintergrund(this.statistik.value.migration);
  }

  processFormative(this: any, selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "cityFormative":

        this.changePrioOfTag(Tags.RepraesentativStadt, 1);
        this.changePrioOfTag(Tags.PublikumsMagnet, 1);

        this.strikeTag(Tags.RepraesentativQuartier);
        this.strikeTag(Tags.nichtRepraesentativ);
        break;

      case "quaterFormative":        
        this.changePrioOfUtilization("Indoor-Spielplatz", 1);
        this.changePrioOfUtilization("Kletterhalle", 1);
        this.changePrioOfUtilization("Hallenbad", 1);
        this.changePrioOfUtilization("Tanzschule", 1);
        this.changePrioOfUtilization("Musikschule", 1);
        this.changePrioOfUtilization("Atelier- und Kreativraum", 1);
        this.changePrioOfUtilization("Repaircafé", 1);
        this.changePrioOfUtilization("Sozialcafé", 1);
        this.changePrioOfUtilization("Jugendtreff", 1);
        this.changePrioOfUtilization("Alten-Service-Zentrum", 1);
        this.changePrioOfUtilization("Gemeindezentrum", 1);
        this.changePrioOfUtilization("Sozialkaufhaus", 1);
        this.changePrioOfUtilization("Vereinszentrum", 1);
        this.changePrioOfUtilization("Lern- und Leseort", 1);
        this.changePrioOfUtilization("Bibliothek", 1);
        this.changePrioOfUtilization("Nachbarschaftsrestaurant", 1);
        this.changePrioOfUtilization("Veranstaltungsraum", 1);
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Ausstellungsraum", 1);
        this.changePrioOfUtilization("Kolumbarium", 1);
        this.changePrioOfUtilization("Tafel", 1);


        this.strikeUtilization("Wohngruppe Frauen und Alleinerziehende");
        this.strikeUtilization("Wohngruppe Jugendliche");
        this.strikeUtilization("Betreutes Wohnen");
        this.strikeUtilization("Co-Housing Projekt");
        this.strikeUtilization("Wohnungslosenunterkunft");
        this.strikeUtilization("Geflüchtetenunterkunft");
        this.strikeUtilization("Gemeinschaftliches Alterswohnen");
        this.strikeUtilization("Studierenden- und Azubi-Wohnheim");

        //and so on
        break;
      case "quaterCityFormative":
        this.changePrioOfUtilization("Indoor-Spielplatz", 1);
        this.changePrioOfUtilization(Utilizations.Turnhalle, 1);
        this.changePrioOfUtilization("Kletterhalle", 1);
        this.changePrioOfUtilization("Hallenbad", 1);
        this.changePrioOfUtilization("Tanzschule", 1);
        this.changePrioOfUtilization("Musikschule", 1);
        this.changePrioOfUtilization("Atelier- und Kreativraum", 1);
        this.changePrioOfUtilization("Repaircafé", 1);
        this.changePrioOfUtilization("Sozialcafé", 1);
        this.changePrioOfUtilization("Jugendtreff", 1);
        this.changePrioOfUtilization("Alten-Service-Zentrum", 1);
        this.changePrioOfUtilization("Gemeindezentrum", 1);
        this.changePrioOfUtilization("Sozialkaufhaus", 1);
        this.changePrioOfUtilization("Vereinszentrum", 1);
        this.changePrioOfUtilization("Lern- und Leseort", 1);
        this.changePrioOfUtilization("Bibliothek", 1);
        this.changePrioOfUtilization("Nachbarschaftsrestaurant", 1);
        this.changePrioOfUtilization("Veranstaltungsraum", 1);
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Universitätsgebäude", 1);
        this.changePrioOfUtilization("Volkshochschule", 1);
        this.changePrioOfUtilization("Verwaltungsgebäude", 1);
        this.changePrioOfUtilization("Offenes religiöses Zentrum", 1);
        this.changePrioOfUtilization("Theater", 1);
        this.changePrioOfUtilization("Konzertsaal", 1);
        this.changePrioOfUtilization("Club", 1);
        this.changePrioOfUtilization("Ausstellungsraum", 1);
        this.changePrioOfUtilization("Kolumbarium", 1);
        this.changePrioOfUtilization("Tafel", 1);
        this.changePrioOfUtilization("Gesundheitskiosk", 1);


        this.strikeUtilization("Wohngruppe Frauen und Alleinerziehende");
        this.strikeUtilization("Wohngruppe Jugendliche");
        this.strikeUtilization("Co-Housing Projekt");
        this.strikeUtilization("Wohnungslosenunterkunft");
        this.strikeUtilization("Geflüchtetenunterkunft");
        this.strikeUtilization("Gemeinschaftliches Alterswohnen");
        this.strikeUtilization("Studierenden- und Azubi-Wohnheim");

        //and so on
        break;
      case "notFormative":
        this.changePrioOfUtilization("Wohngruppe Frauen und Alleinerziehende", 1);
        this.changePrioOfUtilization("Wohngruppe Jugendliche", 1);
        this.changePrioOfUtilization("Betreutes Wohnen", 1);
        this.changePrioOfUtilization("Co-Housing Projekt", 1);
        this.changePrioOfUtilization("Wohnungslosenunterkunft", 1);
        this.changePrioOfUtilization("Geflüchtetenunterkunft", 1);
        this.changePrioOfUtilization("Gemeinschaftliches Alterswohnen", 1);
        this.changePrioOfUtilization("Studierenden- und Azubi-Wohnheim", 1);
        this.changePrioOfUtilization("Erweiterungsbau Schule", 1);
        this.changePrioOfUtilization("Erweiterungsbau Altenheim", 1);
        this.changePrioOfUtilization("Kita", 1);
        this.changePrioOfUtilization("Offenes Ganztagsangebot", 1);
        this.changePrioOfUtilization(Utilizations.Turnhalle, 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Co-Working-Space", 1);


        this.strikeUtilization("Kletterhalle");
        this.strikeUtilization("Hallenbad");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Universitätsgebäude");
        this.strikeUtilization("Volkshochschule");
        this.strikeUtilization("Verwaltungsgebäude");
        this.strikeUtilization("Offenes religiöses Zentrum");
        this.strikeUtilization("Theater");
        this.strikeUtilization("Konzertsaal");
        this.strikeUtilization("Club");
        this.strikeUtilization("Bibliothek");
        this.strikeUtilization("Ausstellungsraum");
        
        //and so on
        break;
    }
  }

  processAnliegendeNutzungen(this: any, selection: AnliegendeNutzungenFormRaw) {
    if(selection == null || selection == undefined){
      return;
    } 
    if(selection.schule){
      this.changePrioOfUtilization("Turnhalle", 1);
      this.changePrioOfUtilization("Jugendtreff", 1);
      this.changePrioOfUtilization("Lern- und Leseort", 1);
      this.changePrioOfUtilization("Tanzschule", 1);
      this.changePrioOfUtilization("Musikschule", 1);
      this.changePrioOfUtilization("Offenes Ganztagsangebot", 1);
      this.changePrioOfUtilization("Erweiterungsbau Schule", 1);
    } else{
      this.strikeUtilization("Erweiterungsbau Schule");
    }
    
    if(selection.altenheim){
      this.changePrioOfUtilization("Alten-Service-Zentrum", 1);
      this.changePrioOfUtilization("Gemeindezentrum", 1);
      this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
      this.changePrioOfUtilization("Gemeinschaftliches Alterswohnen", 1);
      this.changePrioOfUtilization("Kolumbarium", 1);
      this.changePrioOfUtilization("Erweiterungsbau Altenheim", 1);
    } else{
      this.strikeUtilization("Erweiterungsbau Altenheim");
    }

    if(selection.schwimmbad){
    } else{
      this.strikeUtilization("Freibad");
      this.strikeUtilization("Hallenbad");
    }
     
    if(selection.gruenflaeche){
      this.changePrioOfUtilization("Stadtpark", 1);
      this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
      this.changePrioOfUtilization("Spielplatz", 1);
      this.changePrioOfUtilization("Marktplatz", 1);
      this.changePrioOfUtilization("Sportplatz", 1);
      this.changePrioOfUtilization("Tennisplatz", 1);
    } else{
    }

    if(selection.schwimmbad){
    } else{
      this.strikeUtilization("Sportplatz");
      this.strikeUtilization("Tennisplatz");
    }
  }

  processEingang(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "ImWestwerk":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "Seitlich":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;
    }
  }
  processBautyp(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Basilika":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "Hallenkirche":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;

      case "Saalkirche":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;
    }
  }

  processDenkmalschutz(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Ja":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "JaAussen":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;

      case "Nein":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;
    }
  }


   processBausubstanz(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Gut":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "Schlecht":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;

      case "SehrSchlecht":
        this.strikeUtilization("Turnhalle");
        this.strikeUtilization("Hallenbad");
        this.strikeUtilization("Indoor Spielplatz");
        this.strikeUtilization("Tanzschule");
        this.strikeUtilization("Musikschule");
        this.strikeUtilization("Atelier- und Kreativraum");
        this.strikeUtilization("Sozialcafé");
        this.strikeUtilization("Repaircafé");
        this.strikeUtilization("Jugendtreff");
        this.strikeUtilization("Sozialhotel");
        this.strikeUtilization("Alten-Service-Zentrum");
        this.strikeUtilization("Gemeindezentrum");
        this.strikeUtilization("Sozialkaufhaus");
        this.strikeUtilization("Vereinszentrum");
        this.strikeUtilization("Lern- und Leseort");
        this.strikeUtilization("Bibliothek");
        this.strikeUtilization("Nachbarschaftsrestaurant");
        this.strikeUtilization("Veranstaltungsraum");
        this.strikeUtilization("Co-Working-Space");
        this.strikeUtilization("Wohngruppe Frauen und Alleinerziehende");
        this.strikeUtilization("Wohngruppe Jugendliche");
        this.strikeUtilization("Betreutes Wohnen");
        this.strikeUtilization("Co-Housing Projekt");
        this.strikeUtilization("Wohnungslosenunterkunft");
        this.strikeUtilization("Geflüchtetenunterkunft");
        this.strikeUtilization("Gemeinschaftliches Alterswohnen");
        this.strikeUtilization("Offenes Ganztagsangebot");
        this.strikeUtilization("Universitätsgebäude");
        this.strikeUtilization("Verwaltungsgebäude");
        this.strikeUtilization("Erweiterungsbau Schule");
        this.strikeUtilization("Erweiterungsbau Altenheim");
        this.strikeUtilization("Volkshochschule");
        this.strikeUtilization("Konzertsaal");
        this.strikeUtilization("Club");
        this.strikeUtilization("Ausstellungsraum");
        this.strikeUtilization("Tafel");
        this.strikeUtilization("Studierenden- und Azubi-Wohnheim");
      //and so on
        break;
    }
  }

  processAltersquotient(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 30){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processJugendquotient(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 40){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

    processJungeErwachsene(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 15){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processArmutsquotient(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 20){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processNachbarschaft(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 30){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processMigrationshintergrund(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 40){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }
  
  changePrioOfUtilization(searchLabel: String, newPrio: number){
    this.utilizations[this.findUsageIndex(searchLabel)] = {
      prio: this.utilizations[this.findUsageIndex(searchLabel)].prio + newPrio,
      strike: this.utilizations[this.findUsageIndex(searchLabel)].strike,
      label: this.utilizations[this.findUsageIndex(searchLabel)].label,
      tags: this.utilizations[this.findUsageIndex(searchLabel)].tags
    }
  }

  strikeUtilization(searchLabel: String){
    this.utilizations[this.findUsageIndex(searchLabel)] = {
      prio: this.utilizations[this.findUsageIndex(searchLabel)].prio,
      strike: true,
      label: this.utilizations[this.findUsageIndex(searchLabel)].label,
      tags: this.utilizations[this.findUsageIndex(searchLabel)].tags
    }
  }

  findUsageIndex(searchLabel: String): number {
    return this.utilizations.findIndex(i => i.label === searchLabel);
  }

  changePrioOfTag(tag: string, newPrio: number) {
    this.utilizations.forEach((element,index) =>{
      if(element.tags.includes(tag)){
        element.prio += newPrio;
        this.utilizations[index] = element
      }
    })
  }

    strikeTag(tag: string) {
    this.utilizations.forEach((element,index) =>{
      if(element.tags.includes(tag)){
        element.strike = true;
        this.utilizations[index] = element
      }
    })
  }

}
bootstrapApplication(App);