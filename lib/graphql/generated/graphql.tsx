import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  pingServer: Scalars['Boolean'];
  getQuizQuestions: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  logLabelData: Scalars['Boolean'];
};


export type MutationLogLabelDataArgs = {
  label: Scalars['String'];
  data: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetQuizQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuizQuestionsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getQuizQuestions'>
);

export type LogLabelDataMutationVariables = Exact<{
  label: Scalars['String'];
  data: Scalars['String'];
}>;


export type LogLabelDataMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logLabelData'>
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Mutation: {};
  Upload: Scalars['Upload'];
  Int: Scalars['Int'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pingServer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  getQuizQuestions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  logLabelData?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLogLabelDataArgs, 'label' | 'data'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;

export const GetQuizQuestionsDocument = gql`
    query getQuizQuestions {
  getQuizQuestions
}
    `;

/**
 * __useGetQuizQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuizQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuizQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>) {
        return Apollo.useQuery<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>(GetQuizQuestionsDocument, baseOptions);
      }
export function useGetQuizQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>) {
          return Apollo.useLazyQuery<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>(GetQuizQuestionsDocument, baseOptions);
        }
export type GetQuizQuestionsQueryHookResult = ReturnType<typeof useGetQuizQuestionsQuery>;
export type GetQuizQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuizQuestionsLazyQuery>;
export type GetQuizQuestionsQueryResult = Apollo.QueryResult<GetQuizQuestionsQuery, GetQuizQuestionsQueryVariables>;
export const LogLabelDataDocument = gql`
    mutation logLabelData($label: String!, $data: String!) {
  logLabelData(label: $label, data: $data)
}
    `;
export type LogLabelDataMutationFn = Apollo.MutationFunction<LogLabelDataMutation, LogLabelDataMutationVariables>;

/**
 * __useLogLabelDataMutation__
 *
 * To run a mutation, you first call `useLogLabelDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogLabelDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logLabelDataMutation, { data, loading, error }] = useLogLabelDataMutation({
 *   variables: {
 *      label: // value for 'label'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLogLabelDataMutation(baseOptions?: Apollo.MutationHookOptions<LogLabelDataMutation, LogLabelDataMutationVariables>) {
        return Apollo.useMutation<LogLabelDataMutation, LogLabelDataMutationVariables>(LogLabelDataDocument, baseOptions);
      }
export type LogLabelDataMutationHookResult = ReturnType<typeof useLogLabelDataMutation>;
export type LogLabelDataMutationResult = Apollo.MutationResult<LogLabelDataMutation>;
export type LogLabelDataMutationOptions = Apollo.BaseMutationOptions<LogLabelDataMutation, LogLabelDataMutationVariables>;