import CategoryItem from "../category-item/category-item.component";

import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map(({title, id, imageUrl}) => {
                return <CategoryItem id={id} title={title} imageUrl={imageUrl} key={id}/>
            })}
        </div>
    );
};

export default Directory;