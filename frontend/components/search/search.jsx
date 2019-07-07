import React from 'react';
import ListingIndex from '../listings/listing_index';
import ListingMap from '../listings/listing_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { 
      listings, 
      fetchListings, 
      fetchListing, 
      updateFilter 
    } = this.props;

    return(
      <div className="search__container-main">
        <ListingIndex 
          listings={listings} 
          fetchListings={fetchListings}
          fetchListing={fetchListing} />
        <ListingMap 
          listings={listings} 
          updateFilter={updateFilter} />
      </div>
    );
  }
}

export default Search;