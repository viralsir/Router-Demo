import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  questions=[
            {question:"5+5",ans1:10,ans2:20,ans3:34,ans4:12,correctans:10,msg:""},
            {question:"15+5",ans1:20,ans2:30,ans3:34,ans4:12,correctans:20,msg:""},
            {question:"25+5",ans1:30,ans2:20,ans3:34,ans4:12,correctans:30,msg:""},
            {question:"35+5",ans1:40,ans2:20,ans3:34,ans4:12,correctans:40,msg:""},
            {question:"55+5",ans1:60,ans2:20,ans3:34,ans4:12,correctans:60,msg:""},
            {question:"65+5",ans1:70,ans2:20,ans3:34,ans4:12,correctans:70,msg:""},
  ]


  myForm:FormGroup=new FormGroup({});

  constructor(public form:FormBuilder) {
         this.myForm=form.group({})
        this.questions.forEach(element=>this.myForm.addControl(element.question,form.control("")))
  }

 checkAnswer():void{
     console.log(this.myForm.value);
     let formdata=this.myForm.value;
     for (const formdataKey in formdata)
     {
          let question= this.questions.find(q=>q.question==formdataKey);
          // @ts-ignore
       if(question["correctans"]==formdata[formdataKey]){
              // @ts-ignore
         question["msg"]="answer is correct";
          }
         else {
         // @ts-ignore
         question["msg"]="answer is incorrect";
       }
     }
 }


}
