

export const getProperties = async (limit) => {
    const apiUrl = `https://nedcom.crmrebs.com/api/public/property/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${limit ? "limit="+limit : ''}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.objects;
};
