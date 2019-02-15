 var test = {
     questions: [{
         number: "1. When Martha arrived at the station, Ruth ...",
         variants: [{
                 option: 'already left.',
                 correct: -1
                 //marked: "checked" не получается привязать через v-bind 

                    },
             {
                 option: 'had already left.',
                 correct: 1

                    },
             {
                 option: 'has already left.',
                 correct: -2

                    },
                ]
            }, {
         number: "2. If she ..... on holiday to Russia, she wouldn't have met Ivan.",
         variants: [{
                 option: "hadn't gone",
                 correct: 1
                    },
             {
                 option: "haven't gone",
                 correct: -1

                    },
             {
                 option: "didn't go",
                 correct: -2
                    },
                ]
            }, {
         number: "3. By the time you see this letter I ...",
         variants: [{
                 option: 'would be far away.',
                 correct: -1
                    },
             {
                 option: 'am going to be far away.',
                 correct: -2
                    },
             {
                 option: 'will be far away.',
                 correct: 1
                    },
                ]
            }, {
         number: "4. A: What are you doing tonight at 6? B: I'm not sure, I .... to the theatre.",
         variants: [{
                 option: 'might go',
                 correct: 1
                    },
             {
                 option: 'will go',
                 correct: -1
                    },
             {
                 option: 'would go',
                 correct: -2
                    },
                ]
            }, {
         number: "5. It's no use...this washing mashine. It's too old",
         variants: [{
                 option: 'to repair',
                 correct: -1
                    },
             {
                 option: 'repaired',
                 correct: -2
                    },
             {
                 option: 'repairing',
                 correct: 1
                    },
                ]
            }, {
         number: "6. He forgot...the lights before he left",
         variants: [{
                 option: 'to turn off',
                 correct: 1
                    },
             {
                 option: 'turn off',
                 correct: -1
                    },
             {
                 option: 'turning off',
                 correct: -2
                    },
                ]
            }, {
         number: "7. Their commercial offer was too good for me to turn it...",
         variants: [{
                 option: 'away',
                 correct: -1
                    },
             {
                 option: 'off',
                 correct: -2
                    },
             {
                 option: 'down',
                 correct: 1
                    },
                ]
            }, {
         number: "8. Karla didn't get the job .... having high qualifications.",
         variants: [{
                 option: 'despite',
                 correct: 1
                    },
             {
                 option: 'although',
                 correct: -1
                    },
             {
                 option: 'even though',
                 correct: -2
                    },
                ]
            }, {
         number: "9. If only I .... to the party instead of staying in bed.",
         variants: [{
                 option: 'did go',
                 correct: -1
                    },
             {
                 option: 'had gone',
                 correct: 1
                    },
             {
                 option: 'went',
                 correct: -2
                    },
                ]
            }, {
         number: "10. The police officer ordered him...",
         variants: [{
                 option: 'not to move',
                 correct: 1
                    },
             {
                 option: 'not move',
                 correct: -2
                    },
             {
                 option: 'not moving',
                 correct: -1
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
                     return val === 1
                 }).length;
             },
             
             
             

         }
     });

