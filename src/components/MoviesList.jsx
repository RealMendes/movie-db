import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MoviesList = ({movies}) => (
    <section>
        <ul>
            {movies.map( m => <MovieItem key={m.id} {...m} /> )}
        </ul>
    </section>
);

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};
