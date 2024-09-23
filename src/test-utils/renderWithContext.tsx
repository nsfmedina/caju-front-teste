import { render } from "@testing-library/react"
import { ReactElement } from "react";

import { AdmissionsProvider } from "~/context/admissions";
import { GeneralUIProvider } from "~/context/general-ui";

export const renderWithContext = (Component: ReactElement) => {
  render(
    <AdmissionsProvider>
      <GeneralUIProvider>
        {Component}
      </GeneralUIProvider>
    </AdmissionsProvider>
  )
}

export * from '@testing-library/react';