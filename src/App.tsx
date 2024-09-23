import { AdmissionsProvider } from "./context/admissions";
import { GeneralUIProvider } from "./context/general-ui";
import AppContainer from "./components/containers/AppContainer";

function App() {
  return (
    <AdmissionsProvider>
      <GeneralUIProvider>
        <AppContainer />
      </GeneralUIProvider>
    </AdmissionsProvider>
  );
}

export default App;
