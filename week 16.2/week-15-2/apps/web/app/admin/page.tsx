import { Admin } from "@repo/ui/admin";
import styles from "../page.module.css";
export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Admin appName="web">Hey</Admin>
    </main>
  );
}
