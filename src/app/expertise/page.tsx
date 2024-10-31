import { Card } from "@/components/card/Card";
import { Grid } from "@/components/grid/Grid";
import { expertiseCards } from "../data/data";

export default function ExpertisePage() {
  return (
    <Grid>
      {expertiseCards.map(({ children, ...rest }, id) => (
        <Card key={id} {...rest}>
          {children}
        </Card>
      ))}
    </Grid>
  );
}
