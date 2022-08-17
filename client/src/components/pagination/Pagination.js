import './Pagination.scss';

export const Pagination = ({
    changePageHandler,
    page,
    articlesCount
}) => {
    const currentPage = Number(page);
    const pagesCount = Math.ceil(articlesCount / Number(3)) || 1;

    const paginateHandler = (e) => {
        e.preventDefault();
        changePageHandler(e.target.value)
    }

    return (
        <div className="row pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="pagination-wrap">
                            <ul>
                                <li><button onClick={paginateHandler} value={1}>{'<<<'}</button></li>
                                <li><button onClick={paginateHandler} value={currentPage !== 1 ? currentPage - 1 : 1}>{'<'}</button></li>
                                {currentPage !== 1 &&
                                    <>
                                        <li><button className="unclickable">{currentPage - 1}</button></li>
                                    </>
                                }

                                <li><button className="active unclickable">{currentPage}</button></li>

                                {pagesCount !== currentPage &&
                                    <>
                                        <li><button className="unclickable">{currentPage + 1}</button></li>
                                    </>
                                }
                                <li><button onClick={paginateHandler} value={currentPage !== pagesCount ? currentPage + 1 : currentPage}> {'>'} </button></li>
                                <li><button onClick={paginateHandler} value={pagesCount}> {'>>>'}</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
