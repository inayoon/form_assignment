import TrialForm from "./components/TrialForm";
import TrialInfo from "./components/TrialInfo";

export default function Home() {
  return (
    <section className="main_container">
      <div className="inner_shadow_container">
        <TrialInfo />
        <div className="form_container">
          <TrialForm />
        </div>
      </div>
    </section>
  );
}
