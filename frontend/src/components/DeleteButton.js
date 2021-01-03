import React, {useState} from "react"
import {useMutation} from "@apollo/react-hooks"
import {Button, Confirm, Icon} from "semantic-ui-react"

import {FETCH_POSTS_QUERY} from "../graphql/FETCH_POSTS_QUERY"
import {DELETE_COMMENT_MUTATION} from "../graphql/DELETE_COMMENT_MUTATION"
import {DELETE_POST_MUTATION} from "../graphql/DELETE_POST_MUTATION"

export default function DeleteButton({postId, commentId, callback}){
    const [confirmOpen, setConfirmOpen] = useState(false)
    const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION
    const [deletePostOrMutation] = useMutation(mutation, {
        update(proxy){
            setConfirmOpen(false)
            if (!commentId){
                const data = proxy.readQuery({
                    query: FETCH_POSTS_QUERY
                })
                proxy.writeQuery({query: FETCH_POSTS_QUERY, data: {getPosts: data.getPosts.filter(p => p.id !== postId)}})
            }
            if (callback) callback()
        },
        variables: {
            postId,
            commentId
        }
    })
    return(
        <>
            <Button as="div" color="red" floated="right" onClick={() => setConfirmOpen(true)}>
                <Icon name="trash" style={{margin:0}}/>
            </Button>
            <Confirm open={confirmOpen} onCancel={() => setConfirmOpen(false)} onConfirm={deletePostOrMutation}/>
        </>
    )
}
