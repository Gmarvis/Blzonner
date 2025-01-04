import { createThemeAction } from "remix-themes";

import { themeSessionResolver } from "~/dependency.server";

export const action = createThemeAction(themeSessionResolver);
