$(document).ready(function(){
	
	$("#submit-btn").attr('disabled','disabled');
	$("#submit-btn").attr('value','          ');
	
	var trueRdo = $('#true-rdo');
	var falseRdo = $('#false-rdo');
	
	var t = trueRdo.val();
	var f = falseRdo.val();
	
	trueRdo.click(function(){
		falseRdo.prop('checked', false);

	});
	falseRdo.click(function(){
		trueRdo.prop('checked', false);

	});
	
});

var submitBtn = $('#submit-btn');

var Trivia = {
	
	correctCount: 0,
	incorrectCount: 0,
	
	current: '',
	currentQuestion: '',
	currentAnswer: '',
	
	userChoice: '',
	
	questions: [
		{
			question: 'Christopher Columbus discovered America in 1482.',
			answer: 'false',
		},
		{
			question: 'The first satellite launched was called "Sputnik" from the Soviet Union.',
			answer: 'true',
		},
		{
			question: 'The Great Depression was caused by the aftermath of World War 1.',
			answer: 'false',
		},
		{
			question: 'Tomatoes are fruits.',
			answer: 'true',
		},
		{
			question: 'Thomas Jefferson was the 16th President of the United States.',
			answer: 'false',
		},
		{
			question: 'The pH level of water is 6.',
			answer: 'false',
		},
		{
			question: 'The Burj Khalifa in Dubai is currently the tallest building in the world (as of 2016).',
			answer: 'true',
		},
		{
		
			question: 'The first car was invented in France.',
			answer: 'true',
		},
		{
		
			question: 'Asia is a Country.',
			answer: 'false',
		},
	],
	
	setQuestion: function() {
		
		if(Trivia.questions.length == 0){
			alert("That\'s All The Questions!");
			$('#questionaire').text('That\'s All!');
			setTimeout(function(){
				$('#questionaire').text('');
			},3000);
			$("#submit-btn").attr('disabled','disabled');
			$("#submit-btn").attr('value','          ');
			return;
		}
	
		Trivia.current = Trivia.questions.shift();
		
		console.log(Trivia.current);
		console.log(Trivia.questions);
		
		$('#questionaire').text(Trivia.current.question);
		
		$("#submit-btn").removeAttr('disabled');
		$("#submit-btn").attr('value', 'Submit');
		
	},
	
	answerQuestion: function() {
		
		Trivia.userChoice = $('#answer-input').val().toLowerCase();
		console.log(Trivia.userChoice);
		
		if(Trivia.userChoice == '') {
			$('#message').text('Please submit either \'true\' or \'false\'.');
			setTimeout(function(){
				$('#message').text('');
			},3000);
			return;
		}
		
		if(Trivia.userChoice == Trivia.current.answer) {
			alert('Correct!');
			Trivia.correctCount++;
			$('#correct').text(Trivia.correctCount);
			document.getElementById("answer-input").value = '';
			Trivia.setQuestion();
		}
		else {
			alert('Inorrect!');
			Trivia.incorrectCount++;
			$('#incorrect').text(Trivia.incorrectCount);
			document.getElementById("answer-input").value = '';
			Trivia.setQuestion();
		}

	},
	
}



