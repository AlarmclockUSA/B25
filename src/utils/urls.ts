export function getCartUrl(searchParams: { [key: string]: string | string[] | undefined }) {
  const el = searchParams.el;
  const baseUrl = 'https://www.tickets.brilliance25.com';
  const orderNumber = 'order1737992211982';
  
  if (el && typeof el === 'string') {
    return `${baseUrl}/${orderNumber}/?eL=${el}`;
  }
  
  return `${baseUrl}/${orderNumber}`;
} 