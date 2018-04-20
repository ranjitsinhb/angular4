import { Component, OnInit } from '@angular/core';
import { PostsService } from './service/posts.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  loading: boolean = false;
  page = {
    pageNumber:0,    
    limit: 10,
    count: 0,
    offset: 0,
  };
     
  rows = [];
  
  // columns = [
  //   { prop: 'ID', name: 'No.', width:'50' },
  //   { prop: 'post_title',  name: 'Title', width:'100' },
  //   { prop: 'post_name',  name: 'Name', width:'100' },
  //   { prop: 'post_content',  name: 'Content', width:'200'},    
  //   { prop: 'post_type', name: 'Post Type', width:'80' }
  // ];

  constructor(private postsService: PostsService) { 
    this.page.offset = 0;
    this.page.limit = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });    
  }
  
  setPage(pageInfo){
    this.page.offset = pageInfo.offset;
    this.postsService.getAllPosts(this.page).subscribe(pagedData => {      
      this.page = pagedData.page;
      this.rows = pagedData.data;     
    });
  }

  updateRow(id){
    console.log('Update: ');
    console.log(id);
  }

  deleteRow(id){
    console.log('Delete: ');
    console.log(id);
  }

 


}