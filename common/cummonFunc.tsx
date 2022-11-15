export const ticketViewPrice = (price: number, currency: string) => {
    const ticketPrise = String(price).split('')
    ticketPrise.splice(1, 0, ' ')
    ticketPrise.push(` ${currency}`)
    return ticketPrise
 } 