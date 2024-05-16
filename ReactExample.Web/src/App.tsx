import { Button } from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/Card";
import ThemeToggle from "./components/Theming/ThemeToggle";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-4 h-screen justify-center">
      <ThemeToggle />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>Examples of every button variant</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="destructive">Error</Button>
          <Button variant="purple">Purple</Button>
          <Button variant="blue">Blue</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
