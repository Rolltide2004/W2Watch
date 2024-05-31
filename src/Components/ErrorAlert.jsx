function ErrorAlert({error, searchTerm}) {
    if(searchTerm !== ''){
        return (
            <div class="alert alert-dismissible alert-danger">
                <strong>Oh snap!</strong> '{searchTerm}' resulted in '{error}' error
            </div>
        );
    }else
        return
    
    
}
export default ErrorAlert;