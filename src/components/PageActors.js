import React from "react";
import "../assets/css/pageActors.scss";
import {
    Card
} from "antd";
import { useSelector } from "react-redux";
const {Meta} = Card;

const PageActors = () => {    
    const actorsDetail = useSelector(state => state.movies.actors)

    const actorCards = actorsDetail.map(item =>
        <Card key = {item.id}
            hoverable
            cover={<img alt={item.name} src={item.Image.url} />}>
            <Meta title={item.name} description={item.character} />
        </Card>
    )

    return(
        <div className='ant-card-actors'>
            {actorCards}
        </div>
    )
}

export default PageActors;