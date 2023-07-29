
const baseURL = 'https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit= 5&q='

export const search = async (carNumber: any) => {
    try {
        const response = await fetch(`${baseURL}${carNumber}`);
        const data = await response.json();
        const { result  } = data;
        const { records  } = result;
        const {kinuy_mishari, shnat_yitzur, tozeret_nm} = records[0]; 
        return {carNumber, kinuy_mishari, shnat_yitzur, tozeret_nm};
    } catch (error) {
        console.log(error);
    }
  }