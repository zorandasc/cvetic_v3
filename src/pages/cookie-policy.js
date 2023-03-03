import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import * as styles from "../css/templateBlog.module.css";
import StayledHero from "../components/StayledHero"

const Cookiepolicy = ({ data }) => {
  return (
    <>
      <StayledHero img={data.blog}></StayledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <h1 className={styles.title}>Politika kolačića</h1>
          <div className={styles.underline}></div>
          <article>
            <p>
              Ova politika kolačića opisuje: informacije koje dobijamo od
              kolačića, kako koristimo kolačiće i kako njima možete upravljati.
              Nastavljajući koristiti usluge našeg sajta, potvrđujete da ste
              pročitali i prihvatili ovu politiku kolačića.
            </p>
            <h2>
              Da li{" "}
              <AniLink fade to="/">
                www.svadbenicvet.com
              </AniLink>{" "}
              koristi 'kolačiće'(tzv. cookies)?
            </h2>
            <p>
              Da. Na našoj web stranici se koristi tehnologija kolačića. Ova
              tehnologija omogućuje prikupljanje informacije automatizovanim
              sredstvima kada posjetite web stranicu.{" "}
            </p>
            <p>
              Kolačići služe kao vaš anonimni individualni identifikator koji
              omogućuju funkcioniranje nekih značajki web stranice.
            </p>
            <h2>Šta je 'kolačić'?</h2>
            <p>
              Kolačići (tzv. cookies) su minijaturne datoteke koje se pohranjuju
              na računar ili mobilni uređaj kada posjetimo neku web stranicu.
              Kolačići informacije pohranjuju u obliku parova "ključeva" i
              "vrijednosti" unutar tekstualnih datoteka.{" "}
            </p>
            <p>
              Kolačići dozvoljavaju web stranici da "zapamti" aktivnosti ili
              postavke posjetitelja iz prethodnih posjeta, kako bi ih pri
              sljedećoj posjeti mogla automatski primijeniti. Na taj način web
              stranica već "zna" da ste već bili ovdje i u nekim slučajevima
              prilagođava ono što vidite na ekranu.
            </p>
            <p>
              Više o kolačićima i tehnologiji koja stoji iza njih možete
              pogledati na{" "}
              <a
                href="https://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link prema www.allaboutcookies.org"
              >
                www.allaboutcookies.org
              </a>
            </p>
            <h2>Koje informacije dobijamo od kolačića?</h2>
            <p>
              Prilikom pristupanja web lokaciji, kolačići mogu da identificiraju
              parametre kao što su: tip uređaja, tip operativnog sistema, tip
              pretraživača, IP adresu, jezičke preference, aktivnosti koje
              korisnik obavlja na web sajtu itd. Kolačići ne mogu direktno
              identifikovati samog korisnika. Svrha kolačića je dobronamjerna,
              nisu štetni i ne mogu nositi viruse.{" "}
            </p>
            <h2>Zašto se koriste kolačići? </h2>
            <p>
              Kolačići nam omogućuju prikazivanje relevantnog sadržaja, pružanje
              oglašavanja i unapređenje servis i vašeg mrežnog iskustva.
              Kolačići omogućuju da se zapamte podaci koji će vašu upotrebu web
              stranice učiniti praktičnijom. Informacije koje dobijamo pomoću
              kolačića, koristimo za unapređenje naših proizvoda i usluga, poput
              utvrđivanja koji od naših sadržaja su najpregledaniji.
            </p>
            <p>Kolačići se najčešće koriste za:</p>
            <p>
              - Pamćenje specifičnih preferenci korisnika: na primjer, kolačići
              mogu pohraniti jezik na kojem trenutno pregledavate stranicu.
              Ukoliko se radi o srpskom jeziku, zapis će najčešće izgledati
              ovako: language=sr.{" "}
            </p>
            <p>
              - Autentifikacija: kolačići omogućuju da se utvrdi da li je
              korisnik već ulogovan i time pruže odgovarajuće iskustvo za svakog
              specifičnog korisnika.
            </p>
            <p>
              - Sigurnost: kolačići pomažu u ostvarivanju sigurnosnih mjera i u
              detekciji sumnjivih aktivnosti.
            </p>
            <p>
              - Reklamiranje: kolačići omogućuju bolje iskustvo reklamiranja
              kako za krajnjeg korisnika tako i za oglašavača. Na osnovu
              istorije pretraživača kolačići omogućuju povezivanje oglašivača sa
              korisnikom najzainteresovanijim za određeni proizvod ili uslugu.
            </p>
            <p>
              - Performanse: kolačići omogućiju web stranici da nauči kako rade
              servisi za različite korisnike i kako da se rutira saobraćaj
              između servera .
            </p>
            <p>
              - Analitiku i istraživanje: neke web stranice i aplikacije koriste
              kolačiće da nauče koji od njihovih servisa je najzastupljeniji.
              Ovakve informacije omogućuju kontinualno poboljšanje i
              unapređivanje servisa.
            </p>
            <h2>Kako dijelimo kolačiće?</h2>
            <p>
              Kolačiće možemo podijeliti na privremene (session cookies) ili
              trajne (persistent cookies):
            </p>
            <p>
              • Privremeni kolačići se privremeno pohranjuju na računaru te se
              automatski brišu nakon zatvaranja web pretraživača. Koriste se za
              dobivanje privremenih podataka poput primjerice stanja vaše
              košarice u web shopu.{" "}
            </p>
            <p>
              • Trajni kolačići ostaju pohranjeni na vašem računalu i nakon
              zatvaranja web pretraživača, no najčešće imaju rok trajanja. Takvi
              kolačići se koriste kako bi olakšali pristup registriranim
              korisnicima te pohranjuju podatke poput korisničkog imena i
              lozinke što omogućuje "zapamti me" funkcionalnost prilikom
              ponovnog prijavljivanja. Trajni kolačići mogu na računalu ostati
              spremljeni danima, mjesecima, pa čak i godinama.
            </p>
            <p>
              Kolačiće još dijelimo i na kolačiće prve i kolačiće treće strane:
            </p>
            <p>
              • Kolačići prve strane, dolaze sa web lokacije na kojoj se upravo
              nalazite. Ovi kolačići omogućuju pravilno funkcioniranje web
              stranica i koriste se samo od strane vašeg sajta.
            </p>
            <p>
              • Kolačići treće strane, ovi kolačići se koriste za dijeljenje
              informacije sa trećim stranama kao što su oglašivači ili socijalne
              mreže.
            </p>
            <h2>Koje kolačiće koristimo?</h2>
            <p>
              Na sajtu www.svadbenicvet.com koriste se sledeći kolačići treće
              strane:
            </p>
            <br></br>
            <p>• Analitičke kolačiće</p>
            <p>
              Analitički kolačići omogućuju statističko praćenje korisničke
              aktivnosti. Informacije koje se mogu prikupiti analitičkim
              kolačićima uključuju privatnie podatake, kao što su: IP adresa,
              tip uređaja, tipa pretraživača, tip operativnog sistema, zemlju
              porijekla IP adrese, vrijem pristupa stranici. Analitički kolačići
              ne omogućuju direktnu identifikaciju korisnika, a to se postiže
              agregiranjem podataka te tehnikama anonimizacije poput maskiranja
              IP adrese.
            </p>
            <p>
              Ovaj alat koristimo kako bismo bolje razumjeli način i metode koji
              naši korisnici koriste prilikom interakcije sa našim sajtom te da
              uklonimo poteškoće koje se mogu javiti prikom korištenja našeg
              sajta.
            </p>
            <p>
              Analitičke kolačiće na sajtu{" "}
              <AniLink fade to="/">
                www.svadbenicvet.com
              </AniLink>{" "}
              uključuju:
            </p>
            <p>
              Google Analytics:
              <a
                href="https://www.google.com/intl/en/analytics/learn/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link prema google analytic"
              >
                https://www.google.com/intl/en/analytics/learn/privacy.html
              </a>
            </p>
            <br></br>
            <p>• Marketinške kolačiće</p>
            <p>
              Marketinške kolačiće koristimo za prikazivanje oglasa i drugog
              sadržaja na osnovu prethodnih posjeta korisnika. Podaci
              prikupljeni od marketinških kolačića koriste se za personalizaciju
              oglasa, odnosno ciljano reklamiranje.{" "}
            </p>
            <p>
              Marketinški kolačići na sajtu{" "}
              <AniLink fade to="/">
                www.svadbenicvet.com
              </AniLink>{" "}
              temelje se na:
            </p>
            <p>
              Google AdSense:{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link prema google analytic"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>
            <p>
              Dodatna podešavanja vezana za personalizaciju reklama na Google
              možete obaviti na:{" "}
              <a
                href="https://adssettings.google.com/authenticated?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link prema google analytic"
              >
                https://adssettings.google.com/authenticated?hl=en
              </a>
            </p>
            <h2>Kako ukloniti kolačiće?</h2>
            <p>
              Ukoliko niste saglasni s upotrebom kolačića, možete ih lako
              izbrisati (ili spriječiti) na svom računaru pomoću postavki
              pretraživača koji koristite. Većina modernih pretraživača
              omogućava vam podešavanje kolačića za sve web stranice koje
              posjetite, međutim, na taj način možete ograničiti funkcionalnost
              koja je prikazana na web stranici.
            </p>
            <p>
              Više informacija o upravljanju kolačićima dostupne su na
              stranicama za pomoć (eng. Help) pretraživača koji koristite:
            </p>
            <p>
              U slučaju da koristite Mozilla Firefox pretraživač to možete naći
              na:{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer#w_cookie-settings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link prema google analytic"
              >
                Link
              </a>
            </p>
            <p>
              U slučaju da koristite Google Chrome pretraživač podešavanja za
              kolačiće možete naći na:
              <a
                href="https://support.google.com/accounts/answer/61416?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link prema google analytic"
              >
                Link
              </a>
            </p>
            <p>
              Takođe, onemogućiti servis Google Analytics na svim web lokacijama
              moguće je i tako što ćete preuzeti dodatak pretraživaču (eng.
              Browser Add-on) za isključivanje usluge:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="link prema google analytic"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
            </p>
            <p>
              Budući da je svrha kolačića poboljšanje i omogućivanje što boljeg
              korisničkog iskustva prilikom korištenja naše web lokacije i
              njezinih servisa u punom opsegu njihove funkcionalnosti,
              napominjemo da sprječavanjem ili brisanjem kolačića možete
              onemogućiti funkcioniranje nekih značajki web stranice ili
              prouzrokovati drugačiji rad i izgled u vašem pretraživaču.
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

export default Cookiepolicy
