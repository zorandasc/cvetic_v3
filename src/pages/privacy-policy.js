import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import * as styles from "../css/templateBlog.module.css";
import StayledHero from "../components/StayledHero";

const Privacypolicy = ({ data }) => {
  return (
    <>
      <StayledHero img={data.blog}></StayledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <h1 className={styles.title}>Politika privatnosti</h1>
          <div className={styles.underline}></div>
          <article className={styles.desc}>
            <p>
              Ovaj pravilnik opisuje vrste ličnih podataka koje prikupljamo,
              kako ih koristimo i sa kim ih dijelimo. Također opisuje praksu i
              postupke za rukovanje informacijama (npr. interesima, demografijom
              i upotrebom usluga) prikupljenim putem naših usluga ili od treće
              strane u mjeri u kojoj su te informacije povezane s određenim
              uređajem, korisnikom ili korisničkim računom.{" "}
            </p>
            <p>
              Pod lične podatke podrazumjevamo bilo koje informacije koji pomažu
              da vas identifikuju kao pojedinca (npr, korisničko ime, e-pošta,
              telefonski broj, IP adresa, itd.).
            </p>
            <h2>Koje lične podatke i kada prikupljamo informacije?</h2>
            <p>
              Prikupljamo informacije od vas kada ih ručno dajete koristeći
              kontaktnu formu s naše web stranice (ime i email adresa) ili nakon
              registracije, ako se u budućnosti registracija realizuje na web
              sajtu.
            </p>
            <p>
              Lične podatke koje dobijamo od trećih strana (kao što su socijalne
              mreže). Na primjer, ako pristupite našem sajtu putem usluge
              društvenih medija. Informacije koje dobijamo tom prilikom zavise o
              vašim postavkama privatnosti na odgovarajućoj društvenij mreži i
              mogu uključivati vaše ime, kontakt podatke, korisnički ID i / ili
              korisničko ime povezano s tom uslugom.
            </p>
            <p>
              Naše usluge koriste kolačiće i druge tehnologije praćenja za
              efikasno funkcioniranje i pružanje određenih funkcija. Ove
              tehnologije automatski prikupljaju lične podatke kao što su: IP
              adresa, tip pretraživača, tip uređaja, aktivnost korisnika na web
              stranici itd. Za više informacija o tehnologiji kolačića molimo
              pogledajte našu Politiku kolačića.
            </p>
            <h2>Kako koristimo prikupljene podatke?</h2>
            <p>
              U opštem slučaju prikupljene podatke koristimo da bi poboljšali
              kvalitet naših proizvoda i usluga i personalizirati vaše iskustvo
              predstavljanjem sadržaja prilagođen vama, te efikasno planirali
              buduće aktivnosti.
            </p>
            <p>
              Unošenjem e-pošte ili drugih detalja omogućuje nam da vas
              kontaktiramo u slučaju slanja povratnih informacija za vaše upite
              i komentare.
            </p>
            <p>Podatke prikupljene od kolačića koristimo:</p>

            <p>
              - Da shvatimo i sačuvamo korisničke postavke i preference za
              buduće posjete.
            </p>
            <p>
              - Da pratimo korisničku aktivnost na sajtu radi osiguravanja
              ispravnog funkcioniranja web stranice te s ciljem unapređivanja
              stranice.
            </p>
            <p>
              - U markentiše svrhe. Da pomuću usluga trećih strana koje prate
              ove podatke u naše ime pratimo reklamni sadržaj koj se oglašava na
              našem sajtu.
            </p>
            <p>
              - U analitičke svrhe. Da pomuću usluga trećih strana koje prate
              ove podatke u naše ime sastavimo zbirne podatke o prometu i
              interakcijama na web sajtu, kako bismo ponudili bolje iskustvo i
              alate u budućnosti.
            </p>

            <h2>Sa kim delimo podatke?</h2>
            <p>
              Vaši podaci mogu biti preneti našim pouzdanim partnerima koji
              obrađuju lične podatke u naše ime, uključujući provajdere IT,
              marketinške agencije kao i druge naše pouzdane partnere.
            </p>
            <p>
              U slučaju prenosa podataka, mi ćemo zahtevati da naši pouzdani
              partneri čuvaju tajnost i bezbednost podataka kao i da sprovedu
              odgovarajuće mere kako bi se obezbedila zaštita podataka o
              ličnosti.
            </p>
            <p>
              Vaši podaci mogu biti prosleđeni i drugim privrednim subjektima
              koji su ovlašćeni za obradu podataka na osnovu važećih zakona
              Republike Srbije.
            </p>
            <h2>Linkovi prema trećim stranama</h2>
            <p>
              Povremeno, po vlastitom nahođenju, na našoj web stranici možemo
              uključiti ili ponuditi proizvode ili usluge treće strane. Ove web
              stranice trećih strana imaju odvojena i nezavisna pravila o
              privatnosti. Stoga ne snosimo nikakvu odgovornost ni za sadržaj i
              za aktivnosti ovih povezanih web lokacija.{" "}
            </p>
            <h2>Vaše pravo na privatnost</h2>
            <p>
              Da bi ste na web stranici www.svadbenicvet.com onemogućili
              praćenje vaše aktivnosti i ciljano oglašavanje, koje proizlaze
              upotrebom tehnologije kolačića, pogledajte pomoćne (eng. Help)
              stanice vašeg pretraživača. Više o upravljanju kolačićima,
              saznajte na{" "}
              <AniLink fade to="/cookie-policy">
                Politika kolačića
              </AniLink>
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

export default Privacypolicy
