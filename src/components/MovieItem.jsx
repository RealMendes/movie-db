import PropTypes from 'prop-types';

export const MovieItem = ({title}) => (
    <li>
        {title}
    </li>
);

MovieItem.propTypes = {
    title: PropTypes.string.isRequired
};
