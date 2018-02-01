
export class FavouriteService {
    favouriteQuote: any[] = [];

    addQuote(quote){
        this.favouriteQuote.push(quote);
    }

    isQuoteFavorite(quote) {
        var position = this.favouriteQuote.findIndex(
            (quoteEl) =>{
                return quoteEl.id == quote.id
            });
        if (position  == -1)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    removeQuote(quote){
        var position = this.favouriteQuote.findIndex(
            (quoteEl) =>{
                return quoteEl.id == quote.id
            });
        this.favouriteQuote.splice(position, 1);
    }

    getQuotes(){
        return this.favouriteQuote.slice();
    }
}