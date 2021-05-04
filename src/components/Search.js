import React, {useState} from 'react'
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    searches: {
        position: 'absolute',
        backgroundColor: '#F0F0F0',
        border: '1px solid black',
        zIndex: 1000,
        width: '300px',
        maxHeight: '800px',
        overflow: 'scroll'
    },
    searches_header: {
        display: 'flex',
        height: '40px'
    },
    search_item: {
        height: '150px',
        display: 'grid',
        gridTemplateColumns: '120px 120px',
        gridGap: '30px',
        margin: '10px 0'
    },
    img: {
        height: '140px',
        maxWidth: '120px',
        objectFit: 'cover'
    }
}

export const Search = ({searches, searchProducts}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const close = () => {
        setIsOpen(false);
    }

    return (
        <form noValidate autoComplete="off" className="search">
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={event => { setSearchQuery(event.target.value); searchProducts(searchQuery); setIsOpen(true); }} />
            {(searches && isOpen) && (
                <div style={styles.searches}>
                    <div style={styles.searches_header}>
                        <button onClick={close}>X</button>
                        <p>{searches.length} results for {searchQuery}</p>
                    </div>
                        {searches.map((search) => (
                            <div style={styles.search_item} key={Math.random()} component={Link} to={"/products/" + search.id}>
                                <img style={styles.img} src={search.media.source} alt="" />
                                <Link to={"/products/" + search.id} onClick={close}>
                                    <p>{search.name}</p>
                                </Link>
                            </div>
                        ))}
                </div>
            )}
        </form>
    )
}
