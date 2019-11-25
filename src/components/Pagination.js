import React, {Component} from 'react';

const NEXT = 1;
const PREV = 0;

class Pagination extends Component {
    render(){
        const {owner, repo} = this.props;
        const curPage = parseInt(this.props.curPage);
        const changePage = (direction) => {
            let navPage = curPage;
            switch (direction){
                case NEXT:
                    navPage++;
                    break;
                case PREV:
                    navPage--;
                    break;
                default:
                    break;
            }
            return `/search/${navPage}/${repo}/${owner}`;
        };
        return (
            <ul className='pagination'>
                <li className={curPage === 1 ? 'disabled' : 'waves-effect'}>
                    <a href={changePage(PREV)}><i className="material-icons">chevron_left</i></a>
                </li>
                <li className="active">
                    <a>{curPage}</a>
                </li>
                <li className="waves-effect">
                    <a href={changePage(NEXT)}><i className="material-icons">chevron_right</i></a>
                </li>
            </ul>
        );
    }
}

export default Pagination;