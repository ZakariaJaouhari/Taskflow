import { useState } from 'react';
import useProjects from '../hooks/useProjects';
import Header from '../components/Header';
import MemoizedSidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import ProjectForm from '../components/ProjectForm';
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const { projects, columns, loading, error, addProject, renameProject, deleteProject } = useProjects();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const dangerousName = '<img src=x onerror=alert("HACK")>';

    if (loading) return <div className={styles.loading}>Chargement...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.layout}>
            <Header
                title="TaskFlow"
                onMenuClick={() => setSidebarOpen(p => !p)}
            />
            <div className={styles.body}>
                <MemoizedSidebar
                    projects={projects}
                    isOpen={sidebarOpen}
                    onRename={renameProject}
                    onDelete={deleteProject}
                />
                <div className={styles.content}>
                    <div className={styles.toolbar}>
                        {!showForm ? (
                            <button className={styles.addBtn}
                                onClick={() => setShowForm(true)}>
                                + Nouveau projet
                            </button>
                        ) : (
                            <ProjectForm
                                submitLabel="Créer"
                                onSubmit={(name, color) => {
                                    addProject(name, color);
                                    setShowForm(false);
                                }}
                                onCancel={() => setShowForm(false)}
                            />
                        )}
                    </div>
                    <p>{dangerousName}</p>
                    <MainContent columns={columns} />
                </div>
            </div>
        </div>
    );
} 