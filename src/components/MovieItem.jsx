import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieItem = ({title, id}) => (
    <li>
        <Link to={`/movie/${id}`}>{title}</Link>
    </li>
);

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};
