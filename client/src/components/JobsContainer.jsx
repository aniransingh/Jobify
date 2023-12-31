import { useEffect } from 'react';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAppContext } from '../context/AppContext';
import Loading from './Loading';
import Job from './Job';
import PageButtonContainer from './PageBtnContainer';

const JobsContainer = () => {
    const {
        getJobs,
        jobs,
        isLoading,
        totalJobs,
        search,
        searchStatus,
        searchType,
        sort,
        numOfPages,
        page
    } = useAppContext();

    useEffect(() => {
        getJobs();
    }, [page, search, searchStatus, searchType, sort]);

    if (isLoading) {
        return <Loading center />;
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs found...</h2>
            </Wrapper>
        );
    }
    

    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {jobs.map((job) => {
                    return <Job key={job._id} {...job} />;
                })}
            </div>
            {numOfPages > 1 && <PageButtonContainer />}
        </Wrapper>
    );
};
export default JobsContainer;
