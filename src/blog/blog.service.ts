import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';


@Injectable()
export class BlogService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {  }

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await new this.postModel(createPostDTO);
        return newPost.save();
    }

    async getPost(PostID): Promise<Post> {
        const post = await this.postModel
        .findById(PostID)
        .exec();
        return post;
    }

    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    async editPost(PostID, createPostDTO: CreatePostDTO): Promise<Post> {
        const editedPost = await this.postModel
        .findByIdAndUpdate(PostID, createPostDTO, { new: true });
        return editedPost;
    }

    async deletePost(PostID): Promise<any>{
        const deletedPost = await this.postModel
        .findByIdAndRemove(PostID);
        return deletedPost;
    }
}
