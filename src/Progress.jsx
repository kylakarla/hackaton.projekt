function Progress({ stage }) {
    const totalStages = 6; // Total number of stages
    
    return (
      <div className="flex justify-center space-x-4 w-4/6 mx-auto mt-6 mb-4">
        <img 
          src={`/img/${stage}.svg`}
          alt={`Progress: ${stage} stars`} 
          
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-1"
        />
      </div>
    );
  }
  
  export default Progress;
  