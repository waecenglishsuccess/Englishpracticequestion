function checkAnswers() {
  
    const answers = {
        q1: 'A',
        q2: 'B',
        q3: 'B',
        q4: 'B',
        q5: 'B',
        q6: 'C',
        q7: 'A',
        q8: 'B',
        q9: 'C',
        q10: 'B'
    };

    const allQuestions = document.querySelectorAll('.question');
    
    allQuestions.forEach((question, index) => {
      
        const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        const feedback = question.querySelector('.feedback');
        
        if (selectedAnswer) {
           
            if (selectedAnswer.value === answers[`q${index + 1}`]) {
                feedback.innerHTML = '<span class="correct">✔</span>'; 
            } else {
                feedback.innerHTML = '<span class="incorrect">✘</span>';
            }
        } else {
            feedback.innerHTML = 'Please select an answer.'; 
        }
    });
}
