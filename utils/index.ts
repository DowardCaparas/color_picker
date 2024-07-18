import { FetchColorsResponse } from "@/types";
// import { url } from "@/components/ColorAPI";

export const fetchColorsDark = async (): Promise<FetchColorsResponse> => {
    const response = await fetch('https://csscolorsapi.com/api/colors/theme/dark');
    try {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const data: FetchColorsResponse = await response.json()
        return data

    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error so it can be handled appropriately
    }
}

export const fetchColorsLight = async (): Promise<FetchColorsResponse> => {
  const response = await fetch('https://csscolorsapi.com/api/colors/theme/light');
  try {
      if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      const data: FetchColorsResponse = await response.json()
      return data

  } catch (error) {
      console.log(error);
      throw error; // Rethrow the error so it can be handled appropriately
  }
}
