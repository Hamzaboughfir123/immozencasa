import { SavingsCalculator } from "@/components/interactive/SavingsCalculator";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SavingsSection() {
  return (
    <section id="simulateur" className="bg-brand-beige/50 py-7 sm:py-10">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Votre économie"
          title="Calculez votre économie en 10 secondes."
          description="Votre bien vaut cher. Sa vente ne devrait rien coûter aux propriétaires à Casablanca."
          className="mx-auto gap-3"
        />

        <Reveal className="mt-5" delay={100}>
          <SavingsCalculator />
        </Reveal>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-ink/60">
          Exemple illustratif : pour un bien vendu 1 500 000 DH, une
          commission traditionnelle de 2,5 % représente 37 500 DH — à
          comparer aux 0 DH de commission propriétaire avec ImmoZen Groupe.
          Le taux réel d&rsquo;une agence traditionnelle peut varier.
        </p>
      </Container>
    </section>
  );
}
