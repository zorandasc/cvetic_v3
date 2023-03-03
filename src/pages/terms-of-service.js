import React from "react"
import { graphql } from "gatsby"

import * as styles from "../css/templateBlog.module.css";
import StayledHero from "../components/StayledHero";

const TermsOfService = ({ data }) => {
  return (
    <>
      <StayledHero img={data.blog}></StayledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <h1 className={styles.title}>Prava i obaveze</h1>
          <div className={styles.underline}></div>
          <article>
            <p>
              U nastavku se nalaze pravila i uvjeti pod kojima možete koristiti
              sadržajima na sajtu www.svadbenicvet.com (SvadbeniCvet). Stoga vas
              molimo da se s njima upoznate prije početka njihovog korištenja.
              Tako ćemo izbjeći kasnije eventualne nesporazume i posljedice u
              svezi s time.{" "}
            </p>
            <p>
              S prvim korištenjem web stranice svadbenicvet.com, smatrat ćemo da
              ste se u cijelosti upoznali s ovim uvjetima, da su vam jasni i da
              ih prihvatate. Ako niste saglasni s njima, molimo da ne pristupate
              stranici svadbenicvet.com i ne koristite njezine sadržaje.{" "}
            </p>
            <p>
              Izgled i sadržaj SvadbeniCvet te uvjete korištenja možemo iz
              određenih razloga izmijeniti, stoga vas molimo da iste povremeno
              proučite, kako biste se upoznali s mogućim promjenama. Smatrat
              ćemo da vaše naknadno korištenje SvadbeniCvet predstavlja vaš
              pristanak na sve eventualne izmjene.
            </p>
            <h2>Korištenje sadržaja svadbenicvet.com</h2>
            <p>
              Korištenje materijala i sadržaja SvadbeniCvet dopuštamo samo u
              lične nekomercijalne svrhe.
            </p>
            <p>Ne dopuštamo:</p>
            <p>
              1. objavljivanje, slanje, učitavanje i/ili razmjenu sadržaja
              kojima se vrijeđaju važeći srpski propisi, uključujući neistinite,
              uvredljive, prijeteće, proste, zlostavljajuće, vulgarne,
              rasističke i druge sadržaje koji potiču mržnju bilo koje vrste,
              kao i sadržaje kojima se vrši povreda tuđeg autorskog prava i
              drugih prava intelektualnog vlasništva, neovlašteno otkrivaju
              podaci koji predstavljaju poslovnu ili drugu tajnu, privatne
              poruke, osobni podaci treće osobe ili se vrijeđa pravo na ličnost
              treće osobe;
            </p>
            <p>
              2. objavljivanje, slanje, učitavanje i/ili razmjenu sadržaja kojih
              niste autor, odnosno nositelj autorskog prava i/ili drugih prava
              intelektualnog vlasništva na tim sadržajima te ukoliko nemate
              dozvolu autora za korištenje tih sadržaja;
            </p>
            <p>
              3. objavljivanje, slanje, učitavanje i/ili razmjenu sadržaja
              kojima se vrijeđaju prava dece,{" "}
            </p>
            <p>
              4. izričito ili prikriveno oglašavanje bilo kakvih proizvoda ili
              usluga putem svih sadržaja na www.svadbenicvet.com uključujući i
              privatne poruke;
            </p>
            <p>
              5. korištenje sadržaja i funkcionalnosti SvadbeniCvet na način
              koji može uzrokovati štetu nama, ostalim korisnicima, našim
              partnerima ili bilo kojoj trećoj osobi;
            </p>
            <p>
              6. lažno predstavljanje sa svrhom prijetnje, manipulacije,
              prijevare ili dovođenja u zabludu nas, ostalih korisnika ili
              trećih osoba putem svih sadržaja na SvadbeniCvet uključujući i
              privatne poruke;
            </p>
            <p>
              7. objavljivanje, slanje, učitavanje ili razmjenu neželjenih
              sadržaja korisnicima ili trećim osobama bez njihovog prethodnog
              pristanka ili traženja, uključujući i višestruko slanje materijala
              istog ili vrlo sličnog sadržaja (spamming), lančana pisma,
              piramidalne šeme itd.;
            </p>
            <p>
              8. bilo kakvo ometanje ili onemogućavanje korištenja SvadbeniCvet
              drugim korisnicima;
            </p>
            <p>
              9. svjesno objavljivanje, slanje, učitavanje i/ili razmjenu
              sadržaja koji sadrže računalne viruse, crve, računalne kodove,
              datoteke i programe koji mogu imati za posljedicu ometanje,
              ograničavanje rada ili uništenje bilo kojeg računalnog programa
              ili bilo koje računalne i druge opreme;
            </p>
            <p>
              10. neovlašteno prikupljanje, spremanje, prenošenje i korištenje
              bilo kakvih privatnih podataka korisnika www.svadbenicvet.com.
            </p>
            <h2>Prava intelektualnog vlasništva</h2>
            <p>
              Na stranicama SvadbeniCvet pojavljuju se materijali čiji je
              sadržaj zaštićen autorskim pravom (npr. tekstovi, fotografije,
              crteži) i drugim pravima intelektualnog vlasništva (logotipi,
              zaštitni znakovi itd.). Svaki korisnik web stranice SvadbeniCvet
              snosi vlastitu odgovornost za poštivanje tuđeg autorskog prava i
              drugih prava intelektualnog vlasništva koja se odnose na sadržaje
              dostupne na našoj web stranici. Sadržaje zaštićene intelektualnim
              vlasništvom kao korisnici možete koristiti samo za ličnu,
              nekomercijalnu svrhu.{" "}
            </p>
            <p>Ne dopuštamo:</p>
            <p>
              1. korištenje bilo kojeg sadržaja ili njegovog dijela u
              komercijalne svrhe, bez našeg prethodnog dopuštenja. Korištenjem u
              komercijalne svrhe smatra se ostvarivanje novčane dobiti
              neposredno (prodajom, nuđenjem i/ili reklamiranjem sadržaja koji
              sadrže materijale objavljene na www.svadbenicvet.com) i posredno
              (korištenjem sadržaja na Internetu na platformi gdje se objavljuju
              naplatni oglasi i slično)
            </p>
            <p>
              2. da se sadržaji koji se nalaze na SvadbeniCvet koriste u svrhe
              promocije, odnosno oglašavanja bilo kojeg proizvoda ili usluge bez
              prethodnog našeg odobrenja;
            </p>
            <p>
              3. da se sadržaji koji se nalaze na SvadbeniCvet koriste u svrhe
              prodaje bilo kojeg proizvoda ili usluge bez prethodnog naešg
              odobrenja
            </p>
            <p>
              4. izmjenu, prevođenje, adaptaciju ili bilo koju drugu preradu
              takvih sadržaja u komercijalne svrhe bez prethodnog odobrenja.
            </p>
            <p>
              Korištenjem SvadbeniCvet svjesni ste da su na njoj nazivi, slike,
              fotografije, logotipi, grafički prikazi i drugi sadržaji koji su
              zaštićeni različitim pravima intelektualnog vlasništva čiji su
              nositelj mi ili treće osobe. Bez obzira na vaše korištenje
              SvadbeniCvet, time ne stičete pravo korištenja bilo kojeg
              autorskog dela, robnog ili uslužnog žiga, dizajna, patenta
              (licencu) ili drugog prava čiji je SvadbeniCvet nositelji, odnosno
              treća osoba
            </p>
            <p>
              Pojedine sadržaje, prvenstveno slike naših radova, kojih je
              SvadbeniCvet nositelj autorskog prava, označiti će vodenim žigom
              (eng. watermark). Stavljanjem watermarka SvadbeniCvet tehničkim
              mjerama utiče na smanjenu mogućnost neovlaštenog kopiranja,
              distribucije i drugog oblika iskorištavanja autorskog dela.
              Korisnicima je zabranjeno bilo kakvo uklanjanje watermarka ili
              pokušaj njegove izmjene, prerade kao i bilo kakva druga slična
              tehnička intervencija na watermarku.
            </p>
            <h2>Ograničenje odgovornosti za štetu</h2>
            <p>
              Sadržaji na stranici www.svadbenicvet.com u bilo kojem obliku
              uzimaju se isključivo "takvima kakvi jesu", odnosno "kako su
              dostupni", te se ne smatramo odgovornima za moguće posljedice,
              uključujući bilo kakvu štetu koja može biti uzrokovana ostalim
              korisnicima ili trećim osobama, a koja može proizaći iz različitih
              tumačenja sadržaja koji se nalaze na www.svadbenicvet.com.
            </p>
            <p>
              Usprkos uloženim razumnim naporima, ne garantujemo da će
              www.svadbenicvet.com, odnosno svi njezini sadržaji uvijek biti
              dostupni i raspoloživi, te da neće sadržavati pogreške i
              računarske programe koji bi mogli prouzročiti štetu ostalim
              korisnicima ili trećim osobama (npr. virusi, crvi itd.).
            </p>
            <p>
              Do najveće mjere dopuštene važećim pravnim propisima isključujemo
              odgovornost:
            </p>
            <p>
              1. za bilo kakvu štetu nastalu korisnicima ili trećim osobama
              uslijed objavljivanja na web stranici i društvenim mrežama
              zabranjenih sadržaja te ostalih sadržaja suprotnih uvjetima
              korištenja od strane korisnika, trećih osoba, sponzora,
              oglašivača, itd.;
            </p>
            <p>
              2. za bilo kakvu štetu koju korisnici ili treće osobe prouzrokuju
              ili pretrpe u vezi sa korištenjem web stranice i društvenih mreža
              SvadbeniCvet, osobito u slučaju zloupotrebe, uništenja ili
              oštećenja sadržaja,{" "}
            </p>
            <p>
              3. za štetu nastalu korisnicima i/ili trećim osobama uslijed
              privremene nedostupnosti web stranice SvadbeniCvet, odnosno
              pojedinih sadržaja ili funkcija.
            </p>
            <h2>Reklamni sadržaj</h2>
            <p>
              Na web stranici www.svadbenicvet.com se pojavljuju i reklamni
              sadržaji (reklamne poruke, oglasi, banneri i sl.) koje na temelju
              ugovornog odnosa s nama objavljuju naši partneri i drugi
              oglašivači. Sve ugovorne i druge odnose u koje ulazite s osobama
              koje se oglašavaju na našim stranicama uradit ćete neposredno s
              oglašivačima. Mi nismo uključeni u te odnose i ne preuzimamo
              odgovornosti koji iz njih proizlaze.
            </p>
            <p>
              Do najveće moguće mjere dopuštene važećim pravnim propisima,
              isključujemo odgovornost, za bilo kakvu štetu uzrokovanu
              korisnicima ili trećim osobama u vezi sa zakonom zabranjenim
              oglašavanjem. Sve vaše primjedbe i zahtjeve vezane uz sadržaje
              oglašavanja molimo dostavite izravno oglašivaču.
            </p>
            <br></br>
            <p>Datum zadnje izmjene: 02.02.2020.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "bouq.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default TermsOfService
