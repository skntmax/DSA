// Students

// //  5- sub for every year 

 
// id roll_no stu_name sub   marks  year 
// 1   1001    s1      sub1   70     2005                
// 2   1001    s1      sub2   80     2005    
// 3   1001    s1      sub2    50     2006   
// 4   1003     s3      sub3   80     2008   
 




// student_name , total_marks who achieved > 300  in 2005 year 





//    select sub , year , sum(marks) ,  from student 
//         group by sub , year 
//         having year==2005 


//    select x.* , ( select s.* ,
//     sum(marks) over(partition by sub) as total_marks_in_sub
//     from  
//                 student s 
//         where s.year=2005 ) x 

//         where x.total_marks_in_sub> 3000 











    
            


