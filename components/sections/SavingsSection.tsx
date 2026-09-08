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
          description="Votre bien vaut cher. Sa vente ne devrait rien coûter aux propriétaires au Maroc."
          className="mx-auto gap-3"
        />

        <Reveal className="mt-5" delay={100}>
          <SavingsCalculator />
        </Reveal>
      </Container>
    </section>
  );
}
