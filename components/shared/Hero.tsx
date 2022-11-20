import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dashify from "dashify";
import router from "next/router";
import { useState } from "react";

function Hero() {


    const [content, setContent] = useState({
        skill: undefined,
        location: undefined
    })

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = () => {
        const { location, skill } = content as any
        router.push(`/discover/list/${dashify(location)}/${dashify(skill)}`)
    }
  
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="People working on laptops"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">Discover people potential</span>
                            <span className="block text-teal-200">Once again</span>
                        </h1>
                        <p className="mx-auto my-6 max-w-lg text-center text-xl text-teal-200 sm:max-w-3xl">
                            Help the people by letting them help you
                        </p>
                        <div className="mx-auto flex max-w-lg align-middle items-center space-x-3 pl-0 pr-16">
                            <input
                                type="text"
                                name="location"
                                id="location"
                                value={content.location}
                                onChange={onChange}
                                className="block w-full rounded-md border-gray-300sm:text-sm"
                                placeholder="Poznan"
                            />
                            <select
                                id="skill"
                                name="skill"
                                className=" block w-full rounded-md border-gray-300 sm:text-sm"
                                value={content.skill}
                                onChange={onChange}
                            >
                                <option>Select...</option>
                                <option value={'child-care'}>Child care</option>
                                <option value={'cooking'}>Cooking</option>
                                <option value={'making-relations'}>Making relations</option>
                            </select>
                            
                            <button
                                onClick={onSubmit}
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                Search
                                <FontAwesomeIcon icon={faSearch} className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;