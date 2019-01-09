 var test = {
     questions: [{
         number: "1. When Martha arrived at the station, Ruth ...",
         variants: [{
                 option: 'already left.',
                 correct: 'false'
                 //marked: "checked" не получается привязать через v-bind 

                    },
             {
                 option: 'had already left.',
                 correct: true

                    },
             {
                 option: 'has already left.',

                    },
                ]
            }, {
         number: "2. If she ..... on holiday to Russia, she wouldn't have met Ivan.",
         variants: [{
                 option: "hadn't gone",
                 correct: true
                    },
             {
                 option: "haven't gone",

                    },
             {
                 option: "didn't go",
                 correct: false
                    },
                ]
            }, {
         number: "3. By the time you see this letter I ...",
         variants: [{
                 option: 'would be far away.',
                 correct: false
                    },
             {
                 option: 'am going to be far away.'
                    },
             {
                 option: 'will be far away.',
                 correct: true
                    },
                ]
            }, {
         number: "4. A: What are you doing tonight at 6? B: I'm not sure, I .... to the theatre.",
         variants: [{
                 option: 'might go',
                 correct: true
                    },
             {
                 option: 'will go'
                    },
             {
                 option: 'would go',
                 correct: 'false'
                    },
                ]
            }, {
         number: "5. It's no use...this washing mashine. It's too old",
         variants: [{
                 option: 'to repair',
                 correct: false
                    },
             {
                 option: 'repaired'
                    },
             {
                 option: 'repairing',
                 correct: true
                    },
                ]
            }, {
         number: "6. He forgot...the lights before he left",
         variants: [{
                 option: 'to turn off',
                 correct: true
                    },
             {
                 option: 'turn off'
                    },
             {
                 option: 'turning off',
                 correct: 'false'
                    },
                ]
            }, {
         number: "7. Their commercial offer was too good for me to turn it...",
         variants: [{
                 option: 'away',
                 correct: false
                    },
             {
                 option: 'off'
                    },
             {
                 option: 'down',
                 correct: true
                    },
                ]
            }, {
         number: "8. Karla didn't get the job .... having high qualifications.",
         variants: [{
                 option: 'despite',
                 correct: true
                    },
             {
                 option: 'although'
                    },
             {
                 option: 'even though',
                 correct: 'false'
                    },
                ]
            }, {
         number: "9. If only I .... to the party instead of staying in bed.",
         variants: [{
                 option: 'did go',
                 correct: false
                    },
             {
                 option: 'had gone',
                 correct: true
                    },
             {
                 option: 'went'
                    },
                ]
            }, {
         number: "10. The police officer ordered him...",
         variants: [{
                 option: 'not to move',
                 correct: false
                    },
             {
                 option: 'not move'
                    },
             {
                 option: 'not moving',
                 correct: true
                    },
                ]
            }]
 };

 

     var test = new Vue({
         el: '#app',
         data: {
             visible: false,
             isActive: false,
             test: test,
             questionIndex: 0,
             userVariants: Array(test.questions.length).fill(false)
         },

         methods: {

             next: function () {
                 this.questionIndex++;
             },

             score: function () {
                 return this.userVariants.filter(function (val) {
                     return val
                 }).length;
             },
             
             

         }
     });

