export function getCartUrl(searchParams: { [key: string]: string | string[] | undefined }) {
  const el = searchParams.el;
  const baseUrl = 'https://www.tickets.brilliance25.com/virtualticket';
  
  if (el && typeof el === 'string') {
    return `${baseUrl}?eL=${el}`;
  }
  
  return baseUrl;
} 